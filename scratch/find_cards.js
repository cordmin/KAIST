const fs = require("fs");

function scanFile(filePath, name) {
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split(/\r?\n/);
  console.log(`=== ${name} (${filePath}) ===`);
  let currentCardBadge = "";
  let insideCard = false;
  let cardStart = 0;
  
  lines.forEach((line, i) => {
    const lineNum = i + 1;
    if (line.includes('class="plan-card"')) {
      insideCard = true;
      cardStart = lineNum;
      currentCardBadge = "";
    }
    if (line.includes('class="plan-card-badge"')) {
      const match = line.match(/<span class="plan-card-badge">(.*?)<\/span>/);
      currentCardBadge = match ? match[1] : line.trim();
    }
    if (insideCard && (line.includes('background:#ffffff') || line.includes('background: #ffffff') || line.includes('border:1px solid #e2e8f0'))) {
      console.log(`[L${lineNum}] (Badge: ${currentCardBadge}): ${line.trim().substring(0, 100)}`);
    }
    if (insideCard && line.includes('</div>') && lines[i-1] && lines[i-1].includes('</div>')) {
      // rough card end
    }
  });
}

scanFile("assets/data/lesson-plan-data-oled.js", "OLED");
scanFile("assets/data/lesson-plan-data-quantum.js", "QUANTUM");
