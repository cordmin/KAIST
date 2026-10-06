---
name: science-magazine-editorial
description: >-
  Professional editorial science magazine design and writing skill inspired by Scientific American,
  Newton, and Wired. Use when designing high-impact interactive science magazine articles,
  educational feature stories, technical explainers, and analytical infographics for middle school
  and secondary students.
---

# 과학 매거진 에디토리얼 제작 지침 (science-magazine-editorial)

본 스킬은 글로벌 과학 매거진(*Scientific American*, *Newton*, *Wired*, *과학동아*)의 품격 있는 레이아웃과 중학교 과학 교육과정을 융합한 전문 에디토리얼 웹 인터페이스 제작 표준을 정의한다. 유치한 만화/카톡 포맷 및 무분별한 이모지를 일체 배제하고, 지적 호기심을 자극하는 인포그래픽과 정교한 타이포그래피 구조를 구축한다.

---

## 1. 에디토리얼 아키텍처 및 타이포그래피 계층 (Typography & Structure)

1. **지면 구성 요소 (Article Anatomy)**:
   - **Kicker (섹션 식별자)**: 대문자 및 슬림 트래킹 영문/국문 라벨 (예: `FEATURE FOCUS`, `PHYSICS & CHEMISTRY`, `CASE STUDY`).
   - **Headline (표제)**: 24~28px의 굵고 지적인 헤드라인. 자극적이거나 가벼운 감탄사 금지.
   - **Deck / Dek (부제)**: 헤드라인 하단에 본문의 핵심 테제를 2~3줄로 압축한 요약문.
   - **Lead Paragraph (도입 리드문)**: 첫 문단은 살짝 큰 폰트(1.05rem)와 볼드체로 독자의 시선을 장악.
2. **에디토리얼 시각 요소 (Editorial Details)**:
   - **Drop Cap (이니셜 드롭캡)**: 기사 첫 글자를 3em 크기로 띄워 전통적 매거진의 시작을 선언 (`.mag-dropcap`).
   - **Byline & Issue Metadata (발행 정보)**: 기사 상단에 주제 분류, 집필진/편집부 표기, 탐구 권장 학년(중2~3 과학)을 세련되게 배치.
   - **Pull Quote (핵심 명제 인용)**: 지면 중앙에 상하 미세 실선(`border-top`, `border-bottom`)과 큰 따옴표로 감싼 핵심 문장 배치 (AI 특유의 좌측 세로줄 절대 금지).
   - **Stat Callout (데이터 인포그래픽 박스)**: 숫자(75%, 0.1mm, 10^-12초 등)를 2rem 이상의 거대 타이포로 강조하고 하단에 단정한 레이블 결합.
   - **Figure & Caption (도판 및 해설)**: `[도판 01]`, `[도판 02]` 등 학술 매거진 표준 캡션 체계 준수.

3. **철저한 이모지 배제 (Zero Emoji Policy)**:
   - 모든 유니코드 이모지(곤충, 불꽃, 손가락, 메달, 전구 등)를 일체 사용하지 않는다.
   - 시각적 구분은 오직 **Lucide 벡터 아이콘, 라틴 넘버링(01, 02), 간결한 배지 태그**로만 구현한다.

---

## 2. 학습자 눈높이: 중학교 과학 연계 (Middle School Science Level)

1. **타깃 학습자**: 중학교 1~3학년 (만 13~15세)
2. **연계 과학 개념**:
   - **빛과 파동**: 빛의 합성(가산 혼합), 빛의 삼원색(RGB), 파장과 에너지의 관계.
   - **물질의 구성과 원자 구조**: 원자핵과 전자, 전자의 에너지 준위 이동(흡수와 방출).
   - **에너지 전환과 보존**: 전기 에너지가 빛 에너지와 열 에너지로 변환되는 과정, 열 손실과 에너지 효율.
   - **물질의 특성**: 유기물(탄소 화합물)과 무기물의 차이, 분자 구조에 따른 물리적 유연성.
3. **어조 및 톤앤매너**:
   - 존댓말 하십시오/해요체의 단정하고 세련된 과학 저널리즘 문체.
   - 유치한 캐릭터 대화나 과도한 구어체("형님", "요정" 등)를 전면 금지하고, 명확한 논리와 인과관계를 갖춘 설명 제공.

---

## 3. 매거진 인터랙티브 레이아웃 (Magazine UI Layout)

1. **비대칭 2열 매거진 그리드 (Split Magazine Grid)**:
   - 좌측(62~65%): 메인 기사 본문, 핵심 개념 전개, 현미경 분석.
   - 우측(35~38%): [매거진 브레이크아웃(Sidebar Breakout)] 용어 해설, 인포그래픽 데이터 스탯, 심층 탐구 질문.
2. **비교 분석 테이블 (Comparative Spec Sheet)**:
   - LCD와 OLED를 물리적 구조, 발광 메커니즘, 광학적 두께, 명암비(Contrast Ratio), 소비전력 효율 관점에서 데이터 표로 대비.
3. **탐구 저널 & 확인 테스트 (Scientific Journal & Review)**:
   - 객관식/OX 문항은 유치한 도장 대신 "가설 검증(Hypothesis Testing)" 형태의 세련된 퀴즈 모듈로 제공.
