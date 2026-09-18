/**
 * KAIST 첨단과학 탐구 - 활동지 & 교사도움자료 모달 시스템
 * Chrome 탭 UI (학생용 활동지 / 교사용 지도자료) 및 A4 인쇄 지원
 */

/**
 * 활동지 데이터 참조 (assets/data/worksheet-data-oled.js, worksheet-data-quantum.js)
 */
window.worksheetModalData = window.worksheetModalData || {};
const worksheetModalData = window.worksheetModalData;

let currentModalModule = 'oled';
let currentModalLesson = 1;
let currentModalTab = 'student';
let isModelAnswerMode = false;

function autoResizeTextarea(textarea) {
  if (!textarea) return;
  textarea.style.height = 'auto';
  if (textarea.scrollHeight > textarea.clientHeight) {
    textarea.style.height = (textarea.scrollHeight + 4) + 'px';
  }
}

function saveWorksheetInputs(moduleType, lessonNum) {
  if (isModelAnswerMode) return;
  const pane = document.getElementById('modal-pane-student');
  if (!pane) return;
  const inputs = pane.querySelectorAll('input, textarea');
  const values = [];
  inputs.forEach(input => values.push(input.value));
  try {
    sessionStorage.setItem(`ws_${moduleType}_${lessonNum}`, JSON.stringify(values));
  } catch (e) {}
}

function restoreWorksheetInputs(moduleType, lessonNum) {
  const pane = document.getElementById('modal-pane-student');
  if (!pane) return;
  try {
    const saved = sessionStorage.getItem(`ws_${moduleType}_${lessonNum}`);
    const values = saved ? JSON.parse(saved) : [];
    const inputs = pane.querySelectorAll('input, textarea');
    inputs.forEach((input, index) => {
      input.value = (values[index] !== undefined) ? values[index] : '';
    });
  } catch (e) {
    const inputs = pane.querySelectorAll('input, textarea');
    inputs.forEach(input => { input.value = ''; });
  }
}

function ensureWorksheetModalExists() {
  if (document.getElementById('worksheet-modal')) return;

  const modalHtml = `
    <div id="worksheet-modal" class="worksheet-modal-backdrop" onclick="handleModalBackdropClick(event)">
      <div class="worksheet-modal-container" onclick="event.stopPropagation()">
        
        <!-- Modal Header without Chrome tabs -->
        <div class="worksheet-modal-header">
          <div class="worksheet-modal-title-wrap">
            <div style="display:flex; align-items:center; gap:0.65rem; flex-wrap:wrap;">
              <h3 id="worksheet-modal-title" class="worksheet-modal-title">활동지</h3>
              <span id="worksheet-modal-type-badge" class="worksheet-modal-type-badge badge-student">
                <i data-lucide="file-text"></i> <span>학생용 활동지</span>
              </span>
            </div>
          </div>

          <div class="worksheet-modal-actions">
            <button type="button" id="modal-mode-toggle-btn" class="modal-toggle-btn to-teacher" onclick="toggleModalMode()" title="빈칸에 모범답안을 채워 확인합니다">
              <i data-lucide="lightbulb"></i> <span>모범답안 보기</span>
            </button>
            <button type="button" class="topbar-btn primary modal-print-btn" onclick="printModalWorksheet()" title="현재 열린 문서를 A4로 인쇄합니다">
              <i data-lucide="printer"></i> <span>A4 인쇄</span>
            </button>
            <button type="button" class="modal-close-btn" onclick="closeWorksheetModal()" title="닫기 (ESC)">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <!-- Modal Body (Panes for Student & Teacher) -->
        <div class="worksheet-modal-body" id="worksheet-modal-body">
          <div id="modal-pane-student" class="modal-tab-pane active"></div>
          <div id="modal-pane-teacher" class="modal-tab-pane"></div>
        </div>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Auto-save student inputs on input
  const studentPane = document.getElementById('modal-pane-student');
  if (studentPane) {
    studentPane.addEventListener('input', function (e) {
      if (e.target && e.target.tagName === 'TEXTAREA') {
        autoResizeTextarea(e.target);
      }
      saveWorksheetInputs(currentModalModule, currentModalLesson);
    });

    // Interactive clicks for OX buttons and Choice Chips
    studentPane.addEventListener('click', function (e) {
      if (isModelAnswerMode) return;

      const oxBtn = e.target.closest('.ws-ox-btn');
      if (oxBtn) {
        const group = oxBtn.closest('.ws-ox-group');
        if (group) {
          const isSelected = oxBtn.classList.contains('selected');
          group.querySelectorAll('.ws-ox-btn').forEach(b => b.classList.remove('selected'));
          if (!isSelected) {
            oxBtn.classList.add('selected');
            group.setAttribute('data-user-choice', oxBtn.getAttribute('data-choice') || '');
          } else {
            group.removeAttribute('data-user-choice');
          }
        }
        return;
      }

      const chipBtn = e.target.closest('.ws-chip-btn');
      if (chipBtn) {
        const group = chipBtn.closest('.ws-chip-group');
        if (group) {
          const isSelected = chipBtn.classList.contains('selected');
          group.querySelectorAll('.ws-chip-btn').forEach(b => b.classList.remove('selected'));
          if (!isSelected) {
            chipBtn.classList.add('selected');
            group.setAttribute('data-user-choice', chipBtn.getAttribute('data-choice') || chipBtn.innerText.trim());
          } else {
            group.removeAttribute('data-user-choice');
          }
        }
        return;
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeWorksheetModal();
    }
  });
}

function openWorksheetModal(moduleType, lessonNum, tabType = 'student') {
  ensureWorksheetModalExists();

  const data = worksheetModalData[moduleType] && worksheetModalData[moduleType][lessonNum];
  if (!data) return;

  currentModalModule = moduleType;
  currentModalLesson = lessonNum;
  isModelAnswerMode = false;

  document.getElementById('worksheet-modal-title').innerText = data.title;
  document.getElementById('modal-pane-student').innerHTML = data.student;
  document.getElementById('modal-pane-teacher').innerHTML = data.teacher;

  setModalMode(tabType || 'student');

  const modalEl = document.getElementById('worksheet-modal');
  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.lucide) {
    lucide.createIcons();
  }
}

function closeWorksheetModal() {
  const modalEl = document.getElementById('worksheet-modal');
  if (modalEl) {
    modalEl.classList.remove('open');
  }
  document.body.style.overflow = '';
}

function handleModalBackdropClick(event) {
  if (event.target && event.target.id === 'worksheet-modal') {
    closeWorksheetModal();
  }
}

function setModalMode(tabType) {
  const paneStudent = document.getElementById('modal-pane-student');
  const paneTeacher = document.getElementById('modal-pane-teacher');
  const typeBadge = document.getElementById('worksheet-modal-type-badge');
  const toggleBtn = document.getElementById('modal-mode-toggle-btn');
  if (!paneStudent) return;

  const answerInputs = paneStudent.querySelectorAll('[data-answer]');
  const hasInteractiveAnswers = answerInputs.length > 0;

  if (tabType === 'teacher') {
    // 1. Save student inputs before switching
    if (!isModelAnswerMode) {
      saveWorksheetInputs(currentModalModule, currentModalLesson);
    }
    isModelAnswerMode = true;
    currentModalTab = 'teacher';

    if (hasInteractiveAnswers) {
      // Stay on student pane and fill blanks with model answers
      paneStudent.classList.add('active');
      if (paneTeacher) paneTeacher.classList.remove('active');

      answerInputs.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = el.getAttribute('data-answer') || '';
          el.classList.add('is-model-answer');
          el.readOnly = true;
          if (el.tagName === 'TEXTAREA') {
            autoResizeTextarea(el);
          }
        }
      });

      // Highlight OX Groups and Choice Chips in Teacher mode
      paneStudent.querySelectorAll('.ws-ox-group[data-answer]').forEach(group => {
        const ans = group.getAttribute('data-answer');
        group.querySelectorAll('.ws-ox-btn').forEach(btn => {
          btn.classList.remove('is-model-answer', 'is-correct');
          if (btn.getAttribute('data-choice') === ans) {
            btn.classList.add('is-model-answer', 'is-correct');
          }
        });
      });

      paneStudent.querySelectorAll('.ws-chip-group[data-answer]').forEach(group => {
        const ans = group.getAttribute('data-answer');
        group.querySelectorAll('.ws-chip-btn').forEach(btn => {
          btn.classList.remove('is-model-answer', 'is-correct');
          if (btn.getAttribute('data-choice') === ans || btn.innerText.trim() === ans) {
            btn.classList.add('is-model-answer', 'is-correct');
          }
        });
      });

      // Show teacher tips
      const tips = paneStudent.querySelectorAll('.ws-teacher-tip');
      tips.forEach(tip => { tip.style.display = 'block'; });
    } else {
      // Fallback for sheets without [data-answer]
      if (paneTeacher) paneTeacher.classList.add('active');
      paneStudent.classList.remove('active');
    }

    if (typeBadge) {
      typeBadge.className = 'worksheet-modal-type-badge badge-teacher';
      typeBadge.innerHTML = '<i data-lucide="lightbulb"></i> <span>교사용 모범답안</span>';
    }
    if (toggleBtn) {
      toggleBtn.className = 'modal-toggle-btn to-student';
      toggleBtn.innerHTML = '<i data-lucide="file-text"></i> <span>내 작성답안 보기</span>';
      toggleBtn.title = '내가 작성했던 답안으로 복원합니다';
    }
  } else {
    // Student mode
    isModelAnswerMode = false;
    currentModalTab = 'student';

    paneStudent.classList.add('active');
    if (paneTeacher) paneTeacher.classList.remove('active');

    if (hasInteractiveAnswers) {
      answerInputs.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.classList.remove('is-model-answer');
          el.readOnly = false;
          if (el.tagName === 'TEXTAREA') {
            el.style.height = '';
          }
        }
      });

      // Reset OX and Chip highlights, restore student selections
      paneStudent.querySelectorAll('.ws-ox-btn, .ws-chip-btn').forEach(btn => {
        btn.classList.remove('is-model-answer', 'is-correct');
      });

      paneStudent.querySelectorAll('.ws-ox-group').forEach(group => {
        const userChoice = group.getAttribute('data-user-choice');
        group.querySelectorAll('.ws-ox-btn').forEach(btn => {
          btn.classList.toggle('selected', btn.getAttribute('data-choice') === userChoice);
        });
      });

      paneStudent.querySelectorAll('.ws-chip-group').forEach(group => {
        const userChoice = group.getAttribute('data-user-choice');
        group.querySelectorAll('.ws-chip-btn').forEach(btn => {
          btn.classList.toggle('selected', (btn.getAttribute('data-choice') === userChoice || btn.innerText.trim() === userChoice));
        });
      });

      // Hide teacher tips
      const tips = paneStudent.querySelectorAll('.ws-teacher-tip');
      tips.forEach(tip => { tip.style.display = 'none'; });
    }

    // Restore student's typed values
    restoreWorksheetInputs(currentModalModule, currentModalLesson);
    paneStudent.querySelectorAll('textarea').forEach(ta => autoResizeTextarea(ta));

    if (typeBadge) {
      typeBadge.className = 'worksheet-modal-type-badge badge-student';
      typeBadge.innerHTML = '<i data-lucide="file-text"></i> <span>학생용 활동지</span>';
    }
    if (toggleBtn) {
      toggleBtn.className = 'modal-toggle-btn to-teacher';
      toggleBtn.innerHTML = '<i data-lucide="lightbulb"></i> <span>모범답안 보기</span>';
      toggleBtn.title = '빈칸에 모범답안을 채워 확인합니다';
    }
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

function toggleModalMode() {
  const nextMode = (currentModalTab === 'student') ? 'teacher' : 'student';
  setModalMode(nextMode);
}

function printModalWorksheet() {
  document.body.classList.add('printing-modal');

  const cleanup = () => {
    document.body.classList.remove('printing-modal');
    window.removeEventListener('afterprint', cleanup);
  };

  window.addEventListener('afterprint', cleanup);
  window.print();
  setTimeout(cleanup, 1200);
}

// Global exposure
window.openWorksheetModal = openWorksheetModal;
window.closeWorksheetModal = closeWorksheetModal;
window.setModalMode = setModalMode;
window.toggleModalMode = toggleModalMode;
window.switchModalTab = setModalMode; // 하위 호환
window.printModalWorksheet = printModalWorksheet;
