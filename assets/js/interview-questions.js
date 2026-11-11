(() => {
const root=document.getElementById('view-cprl-questions');
root.innerHTML='<div id="interview-app"></div>';
const app=root.firstElementChild;
// 질문은 화면 코드와 분리된 작은 자료 묶음으로 관리한다.
const Q=(tone,title,hint,tails,sensitive=false)=>({tone,title,hint,tails,sensitive});
const trackStarts=[
 [Q('','중학생 때 상상했던 미래의 나와, 지금의 연구자는 얼마나 닮아 있나요?','당시의 장래 희망부터 지금까지 달라진 선택을 따라가 봅니다.',[
 '그때는 어떤 사람이 되고 싶었고, 왜 그랬나요?',
 '지금의 길로 방향이 바뀐 사건이나 사람을 하나 꼽는다면요?']),
 Q('','지금의 이력에는 적히지 않는, 진로를 고민하거나 돌아갔던 시간이 있었나요?','곧장 연구자가 된 것처럼 보이는 이력 사이의 이야기가 궁금합니다.',[
 '그때 어떤 선택 사이에서 고민했나요?',
 '돌아간 시간에 얻은 것이 지금 연구에 도움이 되기도 하나요?'])],
 [Q('','지금 연구에서 아직 답을 모르는 질문 하나를 중학생에게 설명해주세요.','연구 분야의 이름보다 실제로 풀고 있는 문제부터 듣습니다.',[
 '어떤 분자나 현상을 연구하며, 기존 설명의 어디가 부족한가요?',
 '답을 알게 되면 무엇을 더 잘 설명하거나 예측할 수 있나요?']),
 Q('','계산을 실행하기 직전, 가장 신중하게 결정하는 것은 무엇인가요?','컴퓨터가 계산을 시작하기 전에 연구자가 하는 선택을 살펴봅니다.',[
 '최근 계산 하나를 예로 들면 어떤 가정과 조건을 정했나요?',
 '조건을 다르게 정하면 결과가 얼마나 달라질 수 있나요?'])],
 [Q('','입학 전에는 몰랐지만, 후배에게는 꼭 알려주고 싶은 대학원 생활의 현실은 무엇인가요?','좋은 점과 어려운 점 모두 실제 경험을 바탕으로 이야기해주세요.',[
 '그 현실을 처음 느낀 구체적인 사건이 있나요?',
 '미리 알았다면 준비나 선택을 어떻게 달리했을까요?']),
 Q('','연구를 계속하기 위해, 지금 가장 안정되었으면 하는 생활 조건은 무엇인가요?','생활비·시간·건강·주거·미래 계획 중 본인에게 중요한 것부터 듣습니다.',[
 '그 조건이 실제 연구의 하루나 진로 판단에 어떤 영향을 주나요?',
 '본인이 바꿀 수 있는 것과 학교나 제도의 도움이 필요한 것은 각각 무엇인가요?'],true)],
 [Q('','처음으로 학생을 넘어 연구자가 되었다고 느낀 순간은 언제였나요?','자격이나 연차보다 직접 맡은 판단과 책임의 변화가 궁금합니다.',[
 '그날 어떤 일을 했고, 이전과 무엇이 달랐나요?',
 '누군가의 인정과 본인 스스로의 확신 중 무엇이 먼저였나요?']),
 Q('','팀 안에서 본인이 맡은 역할을 연구실 밖의 친구에게 설명한다면요?','공동 연구 안에서 본인의 기여와 협업 방식을 구체적으로 듣습니다.',[
 '함께 정한 부분과 본인이 직접 결정한 부분은 각각 무엇인가요?',
 '입학 첫해와 비교하면 그 역할이 어떻게 달라졌나요?'])]
];
const close=Q('마지막 한 문장','중학생 때의 나에게, 지금 딱 한 문장을 보내준다면요?','멋진 명언보다 그때 정말 필요했던 말이 궁금합니다.',[
'그 말을 들었다면 어떤 선택이 달라졌을까요?',
'지금 과학이 좋지만 자신은 없는 학생에게, 이번 달 해볼 일 하나를 권한다면요?']);
const typeDescriptions=['학창 시절의 관심과 공부 경험, 영향을 준 사람, 화학 전공·대학원·CPRL 선택 과정.','하루의 연구 업무, 계산 결과 해석과 검증, 실패 해결 과정, 본인의 판단과 연구의 한계.','생활비와 지원, 연구 시간과 휴식, 연구자의 권한, 졸업 기준, 병역·돌봄과 졸업 후 진로.'];
const tracks=[
{title:'호기심은 어떻게 진로가 됐을까',short:'성장과 선택',desc:'학창 시절의 엉뚱한 호기심부터 화학과 CPRL을 선택한 순간까지.',items:[
Q('기억을 꺼내며','어릴 때 “그걸 왜 그렇게까지 해?”라는 말을 들을 만큼 빠졌던 게 있나요?','과학이 아니어도 좋습니다. 그때의 집요함을 듣고 싶습니다.',[
'누가 시키지 않았는데 어디까지 해봤나요?', '답을 못 찾았을 때 누구에게 묻거나 무엇을 찾아봤나요?', '그때의 습관이 지금 연구에도 남아 있나요?']),
Q('조금 솔직하게','과학을 좋아하는 것과 시험을 잘 보는 것이 다르다고 느낀 적이 있나요?','둘이 늘 함께였어도 좋습니다. 구체적인 과목이나 사건으로 돌아가 볼까요?',[
'점수와 관계없이 끝까지 붙잡은 문제가 있었나요?', '어려워졌는데도 계속하고 싶었던 이유는 무엇인가요?', '성적만으로 적성을 판단하는 학생에게 어떤 기준을 더 알려주고 싶나요?']),
Q('갈림길에서','인생의 방향을 바꾼 말 한마디나 우연한 기회가 있었나요?','그 사람이 실제로 무엇을 말하고 행동했는지 궁금합니다.',[
'본인이 선택한 부분과 환경이나 우연이 결정한 부분은 무엇이었나요?', '그 기회가 없었다면 어떤 길을 걸었을까요?', '비슷한 학생에게 학교가 마련해줄 수 있는 기회는 무엇일까요?']),
Q('성적표 밖의 이야기','학창 시절의 나를 선생님이 한 단어로 불렀다면요? 지금도 맞는 말인가요?','똑똑하다, 성실하다, 엉뚱하다. 반가웠던 말도, 무거웠던 말도 좋습니다.',[
'그 평가 때문에 하고 싶은 것을 미루거나 실패를 감춘 적이 있나요?', '반대로 누군가의 평가를 벗어나며 해본 일이 있나요?', '학생을 만나는 교사에게 어떤 말을 조심해달라고 하고 싶나요?']),
Q('선택의 무게','화학 연구 말고 마지막까지 고민했던 길은 무엇이었나요?','지금의 선택이 처음부터 정답이었다고 가정하지 않겠습니다.',[
'다른 길에서 얻을 수 있던 무엇을 포기했나요?', '그럼에도 연구를 택하게 한 결정적인 이유는 무엇이었나요?', '당시 말했던 이유와 지금 이해하는 진짜 이유가 다른가요?']),
Q('연구실을 고르던 날','CPRL에 들어오기 전, 꼭 확인한 것과 미처 못 물어본 것은 무엇인가요?','미래의 대학원생이 실제로 써먹을 수 있는 질문을 남겨주세요.',[
'논문·교수와의 대화·선배의 생활 중 무엇을 가장 중요하게 봤나요?', '예상했던 모습과 실제 연구실이 가장 다른 점은 무엇인가요?', '후배에게 “이 질문은 꼭 해라”라고 할 질문 두 가지는요?']),
Q('그때와 지금','입학 첫날의 나에게 지금의 내가 연구를 맡긴다면, 무엇부터 가르치겠어요?','아는 것이 많아진 것 말고, 생각하고 판단하는 방식의 변화가 궁금합니다.',[
'예전에는 정답을 몰라 막혔지만 지금은 접근할 수 있는 문제가 있나요?', '혼자 해결하려다 도움을 요청하는 기준도 달라졌나요?', '올해 새로 들어온 후배에게 가장 먼저 알려주고 싶은 것은요?'])]},
{title:'컴퓨터 앞에서는 무슨 일이 벌어질까',short:'연구의 실제',desc:'계산 한 번의 뒷이야기, 실패를 가려내는 판단, 발견이 되는 순간.',items:[
Q('연구실의 반전','컴퓨터가 계산하는 동안, 연구자는 정말 뭘 하나요?','밖에서 보면 기다리는 시간처럼 보이는 순간의 안쪽을 들여다봅니다.',[
'최근 하루를 읽기·코딩·계산·해석·토론으로 나누면 어떤 비중인가요?', '컴퓨터가 대신 못 하는 판단 하나를 실제 사례로 설명해주실 수 있나요?', '계산을 시작하기 전에 가장 신중하게 정하는 조건은 무엇인가요?']),
Q('그림 하나로','연구 그림 하나만 골라 “여기를 보세요”라고 한다면, 어디를 짚으시겠어요?','공개 가능한 그림이나 계산 결과를 함께 봅니다. 준비가 없다면 말로 설명해도 좋습니다.',[
'이 그림을 만들기 위해 무엇을 넣고 무엇을 계산했나요?', '직접 확인되는 사실과 추가 해석이 필요한 부분은 각각 어디인가요?', '이 그림 하나만으로 내리면 안 되는 결론은 무엇인가요?']),
Q('의심하는 기술','결과가 너무 예쁘게 나왔을 때, 기쁜가요 아니면 먼저 의심하나요?','그럴듯한 그림을 믿을 만한 증거로 만드는 과정이 궁금합니다.',[
'실험값·다른 계산법·알려진 이론 중 무엇과 비교하나요?', '코드 오류와 계산법의 한계, 새로운 현상을 어떻게 구분하나요?', '맞다고 믿었다가 검증하면서 해석을 바꾼 사례가 있나요?']),
Q('실패의 현장','가장 오래 안 풀린 문제를 영화 한 장면처럼 설명해주실 수 있나요?','언제, 어디에서, 무엇을 보고 막혔다고 느꼈는지부터 시작해주세요.',[
'처음 무엇을 의심했고, 어떤 순서로 시도했나요?', '소용없었던 시도도 다음 판단에 도움이 됐나요?', '계속할지 멈출지 결정한 근거는 무엇인가요?']),
Q('나의 판단','이 연구에서 “이건 내가 결정했다”고 말할 수 있는 선택은 무엇인가요?','팀의 성과 안에서 본인의 판단과 기여를 구체적으로 듣습니다.',[
'지도교수·선배가 제안한 부분과 본인이 바꾼 부분은 각각 무엇인가요?', '다른 방법을 선택하지 않은 이유는 무엇인가요?', '어떤 증거가 나오면 그 판단을 바꿀 수 있나요?']),
Q('기대와 증거 사이','원하던 답이 안 나왔을 때, 무엇이 연구자를 붙잡아주나요?','가설이 틀렸다는 것과 연구가 실패했다는 것은 같은 말일까요?',[
'원하는 결론에 맞춰 해석하고 싶을 때 무엇으로 스스로를 점검하나요?', '논문에는 작게 적혀도 후속 연구자가 꼭 알아야 할 한계는 무엇인가요?', '결과보다 문제를 더 정확히 이해하게 된 경험이 있나요?']),
Q('미래를 과장하지 않고','연구를 소개하는 기사에, 딱 한 문장을 고칠 수 있다면 무엇을 고치겠어요?','실제 가능성과 아직 풀리지 않은 문제 사이의 경계를 묻습니다.',[
'본인 분야에서 대중이 가장 자주 오해하는 것은 무엇인가요?', '인공지능이나 새 계산 도구가 잘하는 일과 아직 믿기 어려운 일은요?', '연구 결과가 실제 기술로 이어지려면 무엇이 더 필요하나요?'])]},
{title:'좋아하는 일을 오래 하려면',short:'생활과 진로',desc:'생활비와 시간, 연구자의 권한과 졸업, 한국에서 그리는 다음 선택.',items:[
Q('뜻밖의 생활 질문','대학원 생활을 시작하고 가장 늘어난 능력은 뭔가요? 연구 말고요.','요리, 일정 조율, 절약, 기다림. 웃긴 답 뒤에 숨은 생활도 듣습니다.',[
'그 능력이 필요해진 실제 사건이 있나요?', '반대로 연구를 하면서 줄어든 시간이나 포기한 일은 무엇인가요?']),
Q('생활을 숫자로','지금의 지원으로 생활과 다음 계획을 어느 정도 꾸릴 수 있나요?','정확한 금액 대신 범위나 비율로 답해도 됩니다.',[
'등록금 지원과 별개로 실제 생활에 쓸 돈은 어떻게 마련하나요?', '주거비·식비·저축·가족 지원 중 가장 부담되는 부분은 무엇인가요?', '지원 금액과 지급의 안정성 중 무엇이 선택에 더 영향을 주나요?'],true),
Q('일과 쉼의 경계','연구가 끝나는 시간은 시계가 정하나요, 결과가 정하나요?','평소와 논문 마감 시기의 일주일을 구분해 듣습니다.',[
'밤이나 주말에 일한다면 계산 일정, 본인의 선택, 주변 기대 중 무엇 때문인가요?', '아프거나 개인적인 일이 생기면 실제로 쉴 수 있나요?', '성과를 유지하면서 줄일 수 있는 불필요한 일은 무엇인가요?'],true),
Q('책임과 권한','학생이면서 성과를 만드는 연구자라는 두 위치가 부딪힌 적이 있나요?','배울 시간, 맡는 책임, 의견을 낼 권한을 함께 묻습니다.',[
'연구 방향이나 업무량을 조정해달라고 말할 통로가 있나요?', '다른 의견이 실제로 반영되거나 조정된 경험은요?', '저자 순서와 기여도는 언제 어떤 기준으로 논의하나요?'],true),
Q('끝을 계획할 수 있을까','졸업까지 무엇이 남았는지, 지금 충분히 예측할 수 있나요?','기간이 길다는 사실보다 계획할 수 있는지에 초점을 둡니다.',[
'입학할 때와 지금, 졸업 기준과 예상 시점을 얼마나 알고 있나요?', '연구의 불확실성과 준비 부족, 환경 문제를 어떻게 구분하나요?', '기간이 늘어나면 생활비와 진로 계획은 어떻게 조정되나요?'],true),
Q('각자의 시간표','연구 밖의 삶이 진학이나 연구 일정에 영향을 준 적이 있나요?','병역·가족 돌봄·생계 등 본인에게 해당하는 이야기만 들려주세요.',[
'그 조건 때문에 실제로 어떤 선택을 바꾸었나요?', '선택 당시 정보와 조정 가능한 지원은 충분했나요?', '잠시 쉬었다가 복귀하는 선택도 현실적으로 가능하다고 보나요?'],true),
Q('다음 선택','연구 주제, 소득, 사는 곳, 가족과의 생활. 지금 무엇에 가장 무게를 두나요?','학계·기업·다른 분야 중 특정 길을 정답으로 놓지 않습니다.',[
'박사학위가 선택지를 넓히는 부분과 좁히는 부분은 무엇인가요?', '국내외를 비교한다면 직접 경험한 것과 전해 들은 것을 나눠주세요.', '한국의 연구 환경에서 한 가지만 바꿀 수 있다면 무엇을 바꾸겠나요?'])]},
{title:'나의 질문으로 서는 연구자',short:'성장과 기회',desc:'독립적인 판단과 협업, 기회를 얻는 조건, 오래 연구할 수 있는 환경.',items:[
Q('연구자의 눈','연구를 시작한 뒤 일상에서 그냥 못 지나치게 된 것이 있나요?','빛, 화면, 분자. 익숙한 것을 다르게 보게 된 순간이 궁금합니다.',[
'그 장면을 연구를 모르는 친구에게 어떻게 설명하나요?', '학창 시절에도 비슷한 질문을 품었던 적이 있나요?']),
Q('내가 바꾼 방향','교수님이나 선배와 다른 생각을 냈고, 연구 방향이 달라진 적이 있나요?','다른 의견을 갖게 된 근거와 그 뒤의 대화를 듣습니다.',[
'무엇을 보고 기존 설명이 충분하지 않다고 판단했나요?', '어떤 증거나 계산을 준비해 설득했나요?', '아직 합의하지 못했다면 무엇을 더 확인해야 하나요?']),
Q('능력의 재발견','입학할 때는 몰랐는데, 연구를 하며 발견한 자신의 강점은 무엇인가요?','성적이나 논문 수 이외의 성장도 듣고 싶습니다.',[
'그 강점이 실제로 문제를 해결한 사건이 있나요?', '혼자 하는 능력과 함께 일하는 능력 중 무엇이 더 달라졌나요?', '아직 도움을 받아야 하는 부분은 무엇인가요?']),
Q('함께 일하는 방식','연구가 막혔을 때, 동료와 함께 문제를 풀어간 경험이 있나요?','어떤 도움을 주고받았고, 그 과정에서 무엇이 달라졌는지 들려주세요.',[
'모르겠다고 편하게 말할 수 있었던 장면이 있나요?', '성과로 바로 드러나지 않는 도움과 업무는 어떻게 인정되나요?', '후배에게는 어떤 동료가 되어주고 싶나요?']),
Q('경험이 있다면','연구자로 평가받거나 기회를 얻을 때, 성별이 영향을 주었다고 느낀 적이 있나요?','없었다는 답도 중요합니다. 여성 전체를 대표하는 답을 요구하지 않습니다.',[
'있었다면 어떤 상황이었고, 성별과 관련 있다고 판단한 근거는 무엇인가요?', '발표·업무 배분·협업·진로 조언 중 어디에서 드러났나요?', '개선이나 도움을 요청했다면 어떤 반응이 있었나요?'],true),
Q('앞서 걸은 사람','앞으로의 내 모습을 상상하게 해준 선배나 연구자를 만난 적이 있나요?','여성 선배를 만날 기회가 있었는지도, 그 여부가 중요했는지도 함께 듣습니다.',[
'그 사람이 실제로 어떤 선택이나 정보를 얻는 데 도움을 줬나요?', '가까운 사례가 없었다면 어떤 점을 알아보기 어려웠나요?', '지금 필요한 것은 조언, 동료, 제도적 지원 중 무엇인가요?']),
Q('오래 연구할 조건','연구와 개인의 삶을 함께 지키려면, 어떤 조건이 꼭 필요할까요?','진로·돌봄·건강·생활비 중 본인에게 중요한 것부터 답해주세요.',[
'연구 계획보다 결혼·출산 가능성을 먼저 질문받은 경험이 있나요? 없다면 넘어가도 좋습니다.', '본인의 선택과 주변의 기대를 구분하기 어려웠던 때가 있나요?', '연구 속도를 늦추거나 쉬었다가 복귀할 수 있으려면 무엇이 바뀌어야 하나요?'],true)]
}];
let gender='',year='',track=0,index=0,mode='setup';
let list=[];
function makeList(){
 const yearQ=year==='4'?Q('4년 차의 시선','처음 세웠던 연구 계획 중, 지금이라면 과감히 바꿀 것은 무엇인가요?','처음의 계획을 잘 지켰는지보다, 무엇을 배우며 수정했는지 묻습니다.',['지금도 유효한 질문과 버려야 할 가정은 무엇인가요?','그 변화를 판단하게 한 구체적인 결과나 사건은 무엇인가요?']):Q('5년 차의 시선','더 확인하고 싶은 질문과 연구를 정리할 필요가 충돌하면, 어디까지 하기로 정하나요?','5년 차라는 이유만으로 졸업이 임박했다고 가정하지 않습니다.',['완료 기준은 누구와 어떻게 정하나요?','범위를 줄여도 반드시 지켜야 할 검증은 무엇인가요?']);
 list=[...trackStarts[track],...tracks[track].items,yearQ,close];
}
function button(text,action,cls='text-button',extra=''){return `<button type="button" class="${cls}" data-action="${action}" ${extra}>${text}</button>`}
function render(){
 if(mode==='setup'){
 app.innerHTML=`<div class="setup"><div class="setup-main"><h1>화학과 CPRL 인터뷰 질문지</h1>
 <fieldset><legend>성별</legend><div class="choice-row">${[['m','남성'],['f','여성']].map(([v,l])=>`<label class="choice"><input type="radio" name="gender" value="${v}" ${gender===v?'checked':''}>${l}</label>`).join('')}</div></fieldset>
 <fieldset><legend>석·박사 통합과정 연차</legend><div class="choice-row">${['2','4','5','8'].map(v=>`<label class="choice"><input type="radio" name="year" value="${v}" ${year===v?'checked':''} ${v==='2'||v==='8'?'disabled':''}>${v}년</label>`).join('')}</div></fieldset>
 ${gender==='m'?`<fieldset><legend>질문 유형</legend><div class="route-options">${[0,1,2].map((n,i)=>button(`<strong>${String(i+1).padStart(2,'0')} ${tracks[n].short}</strong><small>${typeDescriptions[n]}</small>`,'track','',`data-track="${n}" aria-pressed="${track===n}"`)).join('')}</div></fieldset>`:''}
 <div class="setup-actions">${button('인터뷰 시작 →','start','action',!gender||!year?'disabled':'')}</div></div>
 </div>`;
 }else if(mode==='question'){
 const q=list[index];
 app.innerHTML=`<article class="paper"><div class="question-body"><p class="question-label"><span class="qnum">${String(index+1).padStart(2,'0')}</span></p><h2 tabindex="-1">${q.title}</h2><p class="question-hint">${q.hint}</p><details><summary>조금 더 들어가 볼까요?</summary><ul class="tails">${q.tails.map((t,i)=>`<li><span class="follow-marker">추가 ${i+1}</span><span class="follow-text">${t}</span></li>`).join('')}</ul></details></div><div class="bottom"><div class="progress" aria-label="${index+1} / ${list.length} 문항">${list.map((_,i)=>`<span class="${i===index?'current':i<index?'done':''}"></span>`).join('')}</div><div class="nav-row"><div class="left">${button('← 이전','prev','ghost',index===0?'disabled':'')}</div><div class="right">${button(index===list.length-1?'마무리 →':'다음 →','next','action')}</div></div></div></article>`;
 }else if(mode==='end'){
 app.innerHTML=`<section class="paper"><p class="eyebrow">${tracks[track].short} · 대화 마무리</p><h1 class="end-title">마지막으로,<br>질문 하나를 더 건네주세요.</h1><p class="closing">“제가 묻지 않았지만,<br>꼭 들었으면 하는 이야기가 있나요?”</p></section>`;

 }
}
function go(n){index=Math.max(0,Math.min(list.length-1,n));mode='question';render();window.scrollTo({top:0,behavior:'instant'});app.querySelector('h2')?.focus({preventScroll:true});}
app.addEventListener('change',e=>{
 const name=e.target.name;if(name==='gender'){gender=e.target.value;track=gender==='f'?3:0;}else if(name==='year')year=e.target.value;render();
 const radio=app.querySelector(`input[name="${name}"]:checked`);radio?.focus({preventScroll:true});
});
app.addEventListener('click',e=>{
 const b=e.target.closest('button[data-action]');if(!b||b.disabled)return;
 switch(b.dataset.action){
 case 'track':track=Number(b.dataset.track);render();break;
 case 'start':if(!gender||!year)return;makeList();go(0);break;
 case 'prev':go(index-1);break;
 case 'next':if(index===list.length-1){mode='end';render();window.scrollTo(0,0);}else go(index+1);break;
 }
});
document.addEventListener('keydown',e=>{
 if(mode!=='question'||!root.classList.contains('active')||/INPUT|TEXTAREA|SELECT|SUMMARY|BUTTON/.test(e.target.tagName)||e.altKey||e.ctrlKey||e.metaKey)return;
 if(e.key==='ArrowRight'&&index<list.length-1){e.preventDefault();go(index+1);}
 if(e.key==='ArrowLeft'&&index>0){e.preventDefault();go(index-1);}
});
// 화면을 떠났다가 돌아오면 선택 화면부터 다시 시작한다.
let wasActive=false;
new MutationObserver(()=>{
 const active=root.classList.contains('active');
 if(active&&!wasActive){gender='';year='';track=0;index=0;mode='setup';list=[];render();}
 wasActive=active;
}).observe(root,{attributes:true,attributeFilter:['class']});
render();
})();

(()=>{
 const root=document.getElementById('view-cprl-questions');
 const align=()=>{
  if(!root.classList.contains('active')||innerWidth<=768)return;
  const label=document.querySelector('#rb-nav-cprl-intro .rebuild-nav-text');
  root.style.setProperty('--question-top',Math.max(0,label.getBoundingClientRect().top-root.getBoundingClientRect().top)+'px');
 };
 window.addEventListener('load',align);
 window.addEventListener('resize',()=>requestAnimationFrame(align));
 new MutationObserver(()=>requestAnimationFrame(align)).observe(root,{attributes:true,attributeFilter:['class']});
})();

(()=>{
 const app=document.getElementById('interview-app');
 function fit(){
  const paper=app.querySelector('article.paper');if(!paper)return;
  paper.style.height=Math.max(360,Math.min(550,innerHeight-paper.getBoundingClientRect().top-24))+'px';
 }
 new MutationObserver(fit).observe(app,{childList:true});
 window.addEventListener('load',()=>requestAnimationFrame(fit));
 window.addEventListener('resize',()=>requestAnimationFrame(()=>requestAnimationFrame(fit)));
})();
