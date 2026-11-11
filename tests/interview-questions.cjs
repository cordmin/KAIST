// 실행: node tests/interview-questions.cjs
// Playwright 경로와 브라우저 실행 파일은 환경 변수로 지정할 수 있다.
const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.BROWSER_EXECUTABLE ? { executablePath: process.env.BROWSER_EXECUTABLE } : {}),
  });
  try {
    const page = await browser.newPage({ viewport: { width: 1346, height: 1244 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(pathToFileURL(path.resolve(__dirname, '../index.html')).href + '#cprl-questions');
    const intro = page.locator('#site-intro');
    if (await intro.isVisible()) {
      await intro.click();
      await intro.waitFor({ state: 'hidden' });
    }
    await page.locator('#rb-nav-cprl-questions').click();
    await page.locator('#interview-app .setup h1').waitFor();
    assert.notEqual(await page.locator('#home-canvas').evaluate(element => getComputedStyle(element).display), 'none');
    assert.equal(await page.locator('#interview-app').evaluate(element => getComputedStyle(element).backgroundColor), 'rgba(0, 0, 0, 0)');
    const lampPosition = await page.locator('#view-cprl-questions').evaluate(element => {
      const bounds = element.getBoundingClientRect();
      return { x: Math.round(bounds.left + 80), y: Math.round(bounds.top + 150) };
    });
    await page.mouse.move(lampPosition.x, lampPosition.y);
    await page.waitForTimeout(100);
    const backgroundError = await page.evaluate(position => {
      const canvas = document.getElementById('home-canvas');
      const bounds = document.getElementById('view-cprl-questions').getBoundingClientRect();
      const scale = canvas.width / canvas.clientWidth;
      const expected = document.createElement('canvas');
      expected.width = canvas.width; expected.height = canvas.height;
      const context = expected.getContext('2d');
      context.scale(scale, scale);
      const gradient = context.createRadialGradient(position.x, position.y, 0, position.x, position.y, 240);
      gradient.addColorStop(0, 'rgba(155,107,255,.28)');
      gradient.addColorStop(1, 'rgba(155,107,255,0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      const actual = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
      const reference = context.getImageData(0, 0, canvas.width, canvas.height).data;
      let error = 0;
      for (let y = Math.ceil((bounds.top + 2) * scale); y < Math.min(canvas.height, (bounds.bottom - 2) * scale); y += 4) {
        for (let x = Math.ceil((bounds.left + 2) * scale); x < Math.min(canvas.width, (bounds.right - 2) * scale); x += 4) {
          const offset = (y * canvas.width + x) * 4;
          error = Math.max(error, Math.abs(actual[offset + 3] - reference[offset + 3]));
        }
      }
      return error;
    }, lampPosition);
    assert.ok(backgroundError <= 1, '본문의 원래 빛 효과를 보존하고 분자만 제외한다');
    assert.deepEqual(await page.locator('input[name=year]').evaluateAll(inputs => inputs.map(input => ({
      value: input.value, disabled: input.disabled, label: input.parentElement.textContent.trim(),
    }))), [
      { value: '2', disabled: true, label: '2년' },
      { value: '4', disabled: false, label: '4년' },
      { value: '5', disabled: false, label: '5년' },
      { value: '8', disabled: true, label: '8년' },
    ]);

    const firstQuestions = new Set();
    let checked = 0;
    for (const width of [1346, 768]) {
      await page.setViewportSize({ width, height: width === 768 ? 1024 : 1244 });
      for (const year of ['4', '5']) {
        for (let track = 0; track < 4; track++) {
          // 모바일에서도 메뉴를 펼쳐 실제 링크로 왕복한다.
          const navigate = async selector => {
            if (width <= 768) await page.evaluate(() => document.body.classList.add('sidebar-open'));
            await page.locator(selector).click();
          };
          await navigate('#rb-nav-cprl-intro');
          await navigate('#rb-nav-cprl-questions');
          await page.locator('.setup h1').waitFor();
          const widths = await page.locator('.setup-main fieldset:nth-of-type(-n+2) .choice')
            .evaluateAll(elements => elements.map(element => element.getBoundingClientRect().width));
          assert.ok(widths.every(width => Math.abs(width - widths[0]) < 1), '성별과 연차 버튼 너비 통일');
          const female = await page.locator('input[name=gender][value=f]').locator('..').boundingBox();
          const secondYear = await page.locator('input[name=year][value="2"]').locator('..').boundingBox();
          assert.ok(Math.abs(secondYear.x - female.x - female.width - 16) < 1, '성별과 연차 사이 간격은 16px');
          assert.equal(await page.locator('#interview-app input:checked').count(), 0);
          await page.locator(`input[name=gender][value=${track === 3 ? 'f' : 'm'}]`).check();
          await page.locator(`input[name=year][value="${year}"]`).check();
          if (track < 3) await page.locator(`[data-track="${track}"]`).click();
          await page.locator('[data-action=start]').click();
          firstQuestions.add(await page.locator('#interview-app h2').innerText());
          const baseline = (await page.locator('[data-action=next]').boundingBox()).y;
          for (let index = 0; index < 11; index++) {
            assert.equal((await page.locator('.question-label').innerText()).trim(), String(index + 1).padStart(2, '0'));
            await page.locator('summary').click();
            assert.equal(await page.locator('details').evaluate(element => element.open), true);
            assert.ok((await page.locator('.follow-marker').first().innerText()).startsWith('추가 '));
            const button = await page.locator('[data-action=next]').boundingBox();
            const line = await page.locator('details').boundingBox();
            assert.ok(Math.abs(button.y - baseline) < 1, '문항 길이와 관계없이 버튼 높이 유지');
            assert.ok(Math.abs(line.x + line.width - button.x - button.width) < 1, '구분선 오른쪽 끝 정렬');
            assert.equal(await page.locator('.progress span').first().evaluate(element => getComputedStyle(element).height), '9px');
            assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
            if (index === 0) {
              await page.locator('[data-action=next]').click();
              await page.locator('[data-action=prev]').click();
            }
            await page.locator('[data-action=next]').click();
            checked++;
          }
          await page.locator('.end-title').waitFor();
          assert.equal(await page.locator('#interview-app button').count(), 0);
        }
      }
    }
    assert.equal(firstQuestions.size, 4, '네 유형의 첫 질문은 서로 달라야 한다');
    await page.setViewportSize({ width: 1346, height: 1244 });
    await page.locator('#rb-nav-cprl-interview').click();
    await page.locator('#view-cprl-interview.active .iv-page img').waitFor();
    assert.equal(await page.locator('#view-cprl-interview .iv-src img').count(), 2);
    await page.locator('#view-cprl-interview [data-step="1"]').click();
    assert.ok((await page.locator('#view-cprl-interview .iv-page img').getAttribute('src')).includes('_2'));
    assert.deepEqual(errors, []);
    console.log(`${checked}문항 검증 완료: 유형 분기, 초기화, 고정 배치, 태블릿, 기존 인터뷰 2페이지`);
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
