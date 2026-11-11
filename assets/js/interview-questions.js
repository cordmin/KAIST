(() => {
const root=document.getElementById('view-cprl-questions');
root.innerHTML='<div id="interview-app"></div>';
const app=root.firstElementChild;
const {tracks,years,closing}=window.interviewQuestionData;
let gender='',year='',track=0,index=0,mode='setup';
let list=[];
function makeList(){
 list=[...tracks[track].questions,years[year],closing];
}
function button(text,action,cls='text-button',extra=''){return `<button type="button" class="${cls}" data-action="${action}" ${extra}>${text}</button>`}
function render(){
 if(mode==='setup'){
 app.innerHTML=`<div class="setup"><div class="setup-main"><h1>화학과 CPRL 인터뷰 질문지</h1>
 <fieldset><legend>성별</legend><div class="choice-row">${[['m','남성'],['f','여성']].map(([v,l])=>`<label class="choice"><input type="radio" name="gender" value="${v}" ${gender===v?'checked':''}>${l}</label>`).join('')}</div></fieldset>
 <fieldset><legend>석·박사 통합과정 연차</legend><div class="choice-row">${['2','4','5','8'].map(v=>`<label class="choice"><input type="radio" name="year" value="${v}" ${year===v?'checked':''} ${v==='2'||v==='8'?'disabled':''}>${v}년</label>`).join('')}</div></fieldset>
 ${gender==='m'?`<fieldset><legend>질문 유형</legend><div class="route-options">${[0,1,2].map((n,i)=>button(`<strong>${String(i+1).padStart(2,'0')} ${tracks[n].label}</strong><small>${tracks[n].description}</small>`,'track','',`data-track="${n}" aria-pressed="${track===n}"`)).join('')}</div></fieldset>`:''}
 <div class="setup-actions">${button('인터뷰 시작 →','start','action',!gender||!year?'disabled':'')}</div></div>
 </div>`;
 }else if(mode==='question'){
 const q=list[index];
 app.innerHTML=`<article class="paper"><div class="question-body"><p class="question-label"><span class="qnum">${String(index+1).padStart(2,'0')}</span></p><h2 tabindex="-1">${q.title}</h2><p class="question-hint">${q.hint}</p><details><summary>조금 더 들어가 볼까요?</summary><ul class="tails">${q.tails.map((t,i)=>`<li><span class="follow-marker">추가 ${i+1}</span><span class="follow-text">${t}</span></li>`).join('')}</ul></details></div><div class="bottom"><div class="progress" aria-label="${index+1} / ${list.length} 문항">${list.map((_,i)=>`<span class="${i===index?'current':i<index?'done':''}"></span>`).join('')}</div><div class="nav-row"><div class="left">${button('← 이전','prev','ghost',index===0?'disabled':'')}</div><div class="right">${button(index===list.length-1?'마무리 →':'다음 →','next','action')}</div></div></div></article>`;
 }else if(mode==='end'){
 app.innerHTML=`<section class="paper"><p class="eyebrow">${tracks[track].label} · 대화 마무리</p><h1 class="end-title">마지막으로,<br>질문 하나를 더 건네주세요.</h1><p class="closing">“제가 묻지 않았지만,<br>꼭 들었으면 하는 이야기가 있나요?”</p></section>`;

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
