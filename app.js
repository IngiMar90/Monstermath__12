
const STORAGE_KEY="monster_math_battle_data_v4";
const TEACHER_PASSWORD="11112222";
const AUTO_RETURN_MS=4500;
const IMAGE_FILES={"Logi":"assets/myndir1/logi.png","Mosi":"assets/myndir1/mosi.png","Steini":"assets/myndir1/steini.png","Plús-púki":"assets/myndir1/plus_puki.png","Mínus-moli":"assets/myndir1/minus_moli.png","Margföldunar-minotaur":"assets/myndir1/margfoldunar_minotaur.png","Deilingar-dreki":"assets/myndir1/deilingar_dreki.png","Glóðmoli":"assets/myndir1/glodmoli.png","Sveppalingur":"assets/myndir1/sveppalingur.png","Tindurkattur":"assets/myndir1/tindurkattur.png","Dropi":"assets/myndir1/dropi.png","Spegladraugur":"assets/myndir1/spegladraugur.png","Þyrnibjörn":"assets/myndir1/thyrnibjorn.png","Skýli":"assets/myndir1/skyli.png","Kristallín":"assets/myndir1/kristallin.png","Næturvængur":"assets/myndir1/naeturvaengur.png","Rótari":"assets/myndir2/rotari.png","Perluskel":"assets/myndir2/perluskel.png","Stormnefur":"assets/myndir2/stormnefur.png","Laufari":"assets/myndir2/laufari.png","Mölvi":"assets/myndir2/molvi.png","Hrafnskuggi":"assets/myndir2/hrafnskuggi.png","Frosti":"assets/myndir2/frosti.png","Kristallbjörn":"assets/myndir2/kristallbjorn.png","Tölutígur":"assets/myndir2/tolutigur.png","Neistli":"assets/myndir2/neistli.png","Hnullungur":"assets/myndir2/hnullungur.png","Myrkri":"assets/myndir2/myrkri.png","Stjörnutrix":"assets/myndir2/stjornutrix.png","Ryðkló":"assets/myndir2/rydklo.png","Giljaxl":"assets/myndir2/giljaxl.png","Slímklumpur":"assets/myndir1/slimklumpur.png","Skuggaköttur":"assets/myndir1/skuggakottur.png","Ísbolti":"assets/myndir1/isbolti.png","Tannagnýr":"assets/myndir1/tannagnyr.png","Kúluloppa":"assets/myndir1/kululoppa.png","Bubblína":"assets/myndir2/bubblina.png","Klósmári":"assets/myndir2/klosmari.png","Gjóströltur":"assets/myndir2/gjostroltur.png","Mýrarkjaftur":"assets/myndir2/myrarkjaftur.png","Skuggasporður":"assets/myndir2/skuggaspordur.png"};
const EVOLUTION_2_IMAGE_FILES={"Logi":"assets/myndir1/logi_evo2.png","Mosi":"assets/myndir1/mosi_evo2.png","Steini":"assets/myndir1/steini_evo2.png","Plús-púki":"assets/myndir1/plus_puki_evo2.png","Mínus-moli":"assets/myndir1/minus_moli_evo2.png","Margföldunar-minotaur":"assets/myndir1/margfoldunar_minotaur_evo2.png","Deilingar-dreki":"assets/myndir1/deilingar_dreki_evo2.png","Glóðmoli":"assets/myndir1/glodmoli_evo2.png","Sveppalingur":"assets/myndir1/sveppalingur_evo2.png","Tindurkattur":"assets/myndir1/tindurkattur_evo2.png","Dropi":"assets/myndir1/dropi_evo2.png","Spegladraugur":"assets/myndir1/spegladraugur_evo2.png","Þyrnibjörn":"assets/myndir1/thyrnibjorn_evo2.png","Skýli":"assets/myndir1/skyli_evo2.png","Kristallín":"assets/myndir1/kristallin_evo2.png","Næturvængur":"assets/myndir1/naeturvaengur_evo2.png","Rótari":"assets/myndir2/rotari_evo2.png","Perluskel":"assets/myndir2/perluskel_evo2.png","Stormnefur":"assets/myndir2/stormnefur_evo2.png","Laufari":"assets/myndir2/laufari_evo2.png","Mölvi":"assets/myndir2/molvi_evo2.png","Hrafnskuggi":"assets/myndir2/hrafnskuggi_evo2.png","Frosti":"assets/myndir2/frosti_evo2.png","Kristallbjörn":"assets/myndir2/kristallbjorn_evo2.png","Tölutígur":"assets/myndir2/tolutigur_evo2.png","Neistli":"assets/myndir2/neistli_evo2.png","Hnullungur":"assets/myndir2/hnullungur_evo2.png","Myrkri":"assets/myndir2/myrkri_evo2.png","Stjörnutrix":"assets/myndir2/stjornutrix_evo2.png","Ryðkló":"assets/myndir2/rydklo_evo2.png","Giljaxl":"assets/myndir2/giljaxl_evo2.png"};
const EVOLUTION_3_IMAGE_FILES={"Logi":"assets/myndir1/logi_evo3.png","Mosi":"assets/myndir1/mosi_evo3.png","Steini":"assets/myndir1/steini_evo3.png","Plús-púki":"assets/myndir1/plus_puki_evo3.png","Mínus-moli":"assets/myndir1/minus_moli_evo3.png","Margföldunar-minotaur":"assets/myndir1/margfoldunar_minotaur_evo3.png","Deilingar-dreki":"assets/myndir1/deilingar_dreki_evo3.png","Glóðmoli":"assets/myndir1/glodmoli_evo3.png","Sveppalingur":"assets/myndir1/sveppalingur_evo3.png","Tindurkattur":"assets/myndir1/tindurkattur_evo3.png","Dropi":"assets/myndir1/dropi_evo3.png","Spegladraugur":"assets/myndir1/spegladraugur_evo3.png","Þyrnibjörn":"assets/myndir1/thyrnibjorn_evo3.png","Skýli":"assets/myndir1/skyli_evo3.png","Kristallín":"assets/myndir1/kristallin_evo3.png","Næturvængur":"assets/myndir1/naeturvaengur_evo3.png","Rótari":"assets/myndir2/rotari_evo3.png","Perluskel":"assets/myndir2/perluskel_evo3.png","Stormnefur":"assets/myndir2/stormnefur_evo3.png","Laufari":"assets/myndir2/laufari_evo3.png","Mölvi":"assets/myndir2/molvi_evo3.png","Hrafnskuggi":"assets/myndir2/hrafnskuggi_evo3.png","Frosti":"assets/myndir2/frosti_evo3.png","Kristallbjörn":"assets/myndir2/kristallbjorn_evo3.png","Tölutígur":"assets/myndir2/tolutigur_evo3.png","Neistli":"assets/myndir2/neistli_evo3.png","Hnullungur":"assets/myndir2/hnullungur_evo3.png","Myrkri":"assets/myndir2/myrkri_evo3.png","Stjörnutrix":"assets/myndir2/stjornutrix_evo3.png","Ryðkló":"assets/myndir2/rydklo_evo3.png","Giljaxl":"assets/myndir2/giljaxl_evo3.png"};
const STARTER_MONSTERS={"Logi":{"description":"Byrjunarskrímsli. Þróun gefur bónus í öllum aðgerðum.","special_operation":"all","buy_cost":75,"rarity":"Starter","bonus_tier":"starter","unlock_battles":0},"Mosi":{"description":"Byrjunarskrímsli. Þróun gefur bónus í öllum aðgerðum.","special_operation":"all","buy_cost":75,"rarity":"Starter","bonus_tier":"starter","unlock_battles":0},"Steini":{"description":"Byrjunarskrímsli. Þróun gefur bónus í öllum aðgerðum.","special_operation":"all","buy_cost":75,"rarity":"Starter","bonus_tier":"starter","unlock_battles":0}};
const SPECIAL_MONSTERS={"Plús-púki":{"description":"Legendary skrímsli sem er sérhæft í samlagningu.","special_operation":"+","buy_cost":300,"rarity":"Legendary","bonus_tier":"legendary","unlock_battles":100},"Mínus-moli":{"description":"Legendary skrímsli sem er sérhæft í frádrætti.","special_operation":"-","buy_cost":300,"rarity":"Legendary","bonus_tier":"legendary","unlock_battles":100},"Margföldunar-minotaur":{"description":"Legendary skrímsli sem er sérhæft í margföldun.","special_operation":"*","buy_cost":300,"rarity":"Legendary","bonus_tier":"legendary","unlock_battles":100},"Deilingar-dreki":{"description":"Legendary skrímsli sem er sérhæft í deilingu.","special_operation":"/","buy_cost":300,"rarity":"Legendary","bonus_tier":"legendary","unlock_battles":100},"Glóðmoli":{"description":"Glóandi og fjörugt eldskrímsli. All-round bónus með þróun.","special_operation":"all","buy_cost":100,"rarity":"Common","bonus_tier":"common","unlock_battles":25},"Sveppalingur":{"description":"Krúttlegt sveppaskrímsli úr skóginum. All-round bónus með þróun.","special_operation":"all","buy_cost":100,"rarity":"Common","bonus_tier":"common","unlock_battles":25},"Tindurkattur":{"description":"Snöggt og lipurt rafkattarskrímsli. All-round bónus með þróun.","special_operation":"all","buy_cost":100,"rarity":"Common","bonus_tier":"common","unlock_battles":25},"Dropi":{"description":"Vinalegt vatnsskrímsli með léttan sjávaranda. All-round bónus með þróun.","special_operation":"all","buy_cost":100,"rarity":"Common","bonus_tier":"common","unlock_battles":25},"Spegladraugur":{"description":"Dularfullur speglaandi. All-round bónus með þróun.","special_operation":"all","buy_cost":130,"rarity":"Rare","bonus_tier":"rare","unlock_battles":50},"Þyrnibjörn":{"description":"Sterkur skógarbjörn með þyrna og börk. All-round bónus með þróun.","special_operation":"all","buy_cost":130,"rarity":"Rare","bonus_tier":"rare","unlock_battles":50},"Skýli":{"description":"Létt og leikandi skýjaskrímsli. All-round bónus með þróun.","special_operation":"all","buy_cost":100,"rarity":"Common","bonus_tier":"common","unlock_battles":25},"Kristallín":{"description":"Fallegt kristalskrímsli með töfraljóma. All-round bónus með þróun.","special_operation":"all","buy_cost":130,"rarity":"Rare","bonus_tier":"rare","unlock_battles":50},"Næturvængur":{"description":"Næturvængjað skrímsli með dularfullan blæ. All-round bónus með þróun.","special_operation":"all","buy_cost":130,"rarity":"Rare","bonus_tier":"rare","unlock_battles":50},"Rótari":{"description":"Jarðbundið rótarskrímsli sem grefur sig áfram. All-round bónus með þróun.","special_operation":"all","buy_cost":100,"rarity":"Common","bonus_tier":"common","unlock_battles":25},"Perluskel":{"description":"Töfrandi perluskeljaskrímsli. All-round bónus með þróun.","special_operation":"all","buy_cost":200,"rarity":"Epic","bonus_tier":"epic","unlock_battles":75},"Stormnefur":{"description":"Snöggt stormfuglaskrímsli með hvassa orku. All-round bónus með þróun.","special_operation":"all","buy_cost":130,"rarity":"Rare","bonus_tier":"rare","unlock_battles":50},"Laufari":{"description":"Krúttlegt laufskrímsli úr skógarbotninum. All-round bónus með þróun.","special_operation":"all","buy_cost":100,"rarity":"Common","bonus_tier":"common","unlock_battles":25},"Mölvi":{"description":"Lítið steina- og grafarskrímsli. All-round bónus með þróun.","special_operation":"all","buy_cost":100,"rarity":"Common","bonus_tier":"common","unlock_battles":25},"Hrafnskuggi":{"description":"Grimmt skugga- og hrafnaskrímsli. All-round bónus með þróun.","special_operation":"all","buy_cost":200,"rarity":"Epic","bonus_tier":"epic","unlock_battles":75},"Frosti":{"description":"Krúttlegt snjóskrímsli með ískristalla. All-round bónus með þróun.","special_operation":"all","buy_cost":100,"rarity":"Common","bonus_tier":"common","unlock_battles":25},"Kristallbjörn":{"description":"Öflugt kristalbjarnarskrímsli. All-round bónus með þróun.","special_operation":"all","buy_cost":200,"rarity":"Epic","bonus_tier":"epic","unlock_battles":75},"Tölutígur":{"description":"Grimmur tígur með töfrandi tölurúnir. All-round bónus með þróun.","special_operation":"all","buy_cost":200,"rarity":"Epic","bonus_tier":"epic","unlock_battles":75},"Neistli":{"description":"Krúttlegt neistaskrímsli sem hoppar hratt. All-round bónus með þróun.","special_operation":"all","buy_cost":100,"rarity":"Common","bonus_tier":"common","unlock_battles":25},"Hnullungur":{"description":"Vinalegt hnullungaskrímsli með steinaskel. All-round bónus með þróun.","special_operation":"all","buy_cost":100,"rarity":"Common","bonus_tier":"common","unlock_battles":25},"Myrkri":{"description":"Grimmt myrkurskrímsli með fjólubláan ljóma. All-round bónus með þróun.","special_operation":"all","buy_cost":130,"rarity":"Rare","bonus_tier":"rare","unlock_battles":50},"Stjörnutrix":{"description":"Krúttlegt stjörnu- og trúðskrímsli. All-round bónus með þróun.","special_operation":"all","buy_cost":130,"rarity":"Rare","bonus_tier":"rare","unlock_battles":50},"Ryðkló":{"description":"Grimmt ryð- og járnskrímsli með stórar klær. All-round bónus með þróun.","special_operation":"all","buy_cost":200,"rarity":"Epic","bonus_tier":"epic","unlock_battles":75},"Giljaxl":{"description":"Þungt gljúfra- og jaxlaskrímsli. All-round bónus með þróun.","special_operation":"all","buy_cost":200,"rarity":"Epic","bonus_tier":"epic","unlock_battles":75}};
const MONSTERS={...STARTER_MONSTERS,...SPECIAL_MONSTERS};
const MONSTER_TYPES={"Logi":"fire","Mosi":"nature","Steini":"earth","Plús-púki":"math","Mínus-moli":"math","Margföldunar-minotaur":"math","Deilingar-dreki":"math","Glóðmoli":"fire","Sveppalingur":"nature","Tindurkattur":"storm","Dropi":"water","Spegladraugur":"shadow","Þyrnibjörn":"nature","Skýli":"storm","Kristallín":"crystal","Næturvængur":"shadow","Rótari":"nature","Perluskel":"water","Stormnefur":"storm","Laufari":"nature","Mölvi":"earth","Hrafnskuggi":"shadow","Frosti":"ice","Kristallbjörn":"crystal","Tölutígur":"math","Neistli":"storm","Hnullungur":"earth","Myrkri":"shadow","Stjörnutrix":"star","Ryðkló":"metal","Giljaxl":"earth"};
const ENEMY_MONSTERS=[{"name":"Slímklumpur","hp":105,"attack":9,"attack_interval":8200},{"name":"Skuggaköttur","hp":115,"attack":10,"attack_interval":8000},{"name":"Ísbolti","hp":120,"attack":10,"attack_interval":7800},{"name":"Tannagnýr","hp":125,"attack":11,"attack_interval":7600},{"name":"Kúluloppa","hp":110,"attack":9,"attack_interval":7900},{"name":"Bubblína","hp":115,"attack":9,"attack_interval":7800},{"name":"Klósmári","hp":130,"attack":12,"attack_interval":7400},{"name":"Gjóströltur","hp":140,"attack":13,"attack_interval":7200},{"name":"Mýrarkjaftur","hp":135,"attack":12,"attack_interval":7300},{"name":"Skuggasporður","hp":145,"attack":13,"attack_interval":7100}];
const OPERATIONS={"Samlagning +":"+","Frádráttur -":"-","Margföldun ×":"*","Deiling ÷":"/","Blandað":"mixed"};
const DIFFICULTIES={"1–3":[1,3],"1–5":[1,5],"5–9":[5,9],"1–10":[1,10],"5–10":[5,10],"10–20":[10,20],"20–50":[20,50]};
const MULTIPLICATION_TABLES=[1,2,3,4,5,6,7,8,9,10];
const STARTER_BONUS_BY_LEVEL={1:0,2:.03,3:.06};
const SPECIAL_BONUS_BY_LEVEL={1:.08,2:.16,3:.25};
const EVOLUTION_BATTLES_REQUIRED={2:30,3:30};
const BONUS_BY_TIER={starter:{1:0,2:.03,3:.06},common:{1:0,2:.05,3:.10},rare:{1:.03,2:.08,3:.13},epic:{1:.05,2:.12,3:.18},legendary:{1:.08,2:.16,3:.25}};
const DIFFICULTY_GOLD_MULTIPLIER={"1–3":.35,"1–5":.5,"5–9":.8,"1–10":1,"5–10":1.2,"10–20":1.6,"20–50":2.2};
const OPERATION_GOLD_MULTIPLIER={"Samlagning +":.8,"Frádráttur -":.9,"Margföldun ×":1.3,"Deiling ÷":1.5,"Blandað":1.4};
const MIN_GOLD_PER_BATTLE=4;
let data=loadData();
let selected={student:data.last_student||"",operationLabel:"Samlagning +",difficultyLabel:"1–5",tables:[],monster:"Logi"};
let battle=null,enemyAttackTimer=null,autoReturnTimer=null,deferredInstallPrompt=null;
const app=document.getElementById("app");
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstallPrompt=e;});
function loadData(){try{const raw=localStorage.getItem(STORAGE_KEY);if(!raw)return{students:{},last_student:""};const d=JSON.parse(raw);d.students=d.students||{};d.last_student=d.last_student||"";return d}catch{return{students:{},last_student:""}}}
function saveData(){normalizeAllData();localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}
function normalizeAllData(){data.students=data.students||{};data.last_student=data.last_student||"";Object.keys(data.students).forEach(getStudentRecord)}
function getStudentRecord(name){if(!name)name="Nemandi";if(!data.students[name])data.students[name]={gold:0,owned_monsters:{},selected_monster:"",sessions:[]};const rec=data.students[name];rec.gold=Number.isFinite(Number(rec.gold))?Math.max(0,Math.floor(Number(rec.gold))):0;if(!rec.owned_monsters||Array.isArray(rec.owned_monsters))rec.owned_monsters={};if(!Array.isArray(rec.sessions))rec.sessions=[];if(Object.keys(rec.owned_monsters).length===0){rec.owned_monsters.Logi={level:1,battles_at_level:0,total_battles:0,nickname:""};rec.selected_monster="Logi"}for(const [m,md] of Object.entries(rec.owned_monsters)){if(!md||typeof md!=="object")rec.owned_monsters[m]={level:1,battles_at_level:0,total_battles:0,nickname:""};rec.owned_monsters[m].level=clampInt(rec.owned_monsters[m].level,1,3,1);rec.owned_monsters[m].battles_at_level=Math.max(0,clampInt(rec.owned_monsters[m].battles_at_level,0,999999,0));rec.owned_monsters[m].total_battles=Math.max(0,clampInt(rec.owned_monsters[m].total_battles,0,999999,0));if(typeof rec.owned_monsters[m].nickname!=="string")rec.owned_monsters[m].nickname=""}if(!rec.selected_monster||!rec.owned_monsters[rec.selected_monster])rec.selected_monster=orderedOwnedNames(rec)[0]||"Logi";return rec}
function clampInt(v,min,max,f){const n=parseInt(v,10);if(!Number.isFinite(n))return f;return Math.max(min,Math.min(max,n))}
function orderedOwnedNames(rec){const order=[...Object.keys(STARTER_MONSTERS),...Object.keys(SPECIAL_MONSTERS)];return order.filter(m=>rec.owned_monsters[m]&&MONSTERS[m])}
function monsterImagePath(n,l=1){if(l>=3&&EVOLUTION_3_IMAGE_FILES[n])return EVOLUTION_3_IMAGE_FILES[n];if(l>=2&&EVOLUTION_2_IMAGE_FILES[n])return EVOLUTION_2_IMAGE_FILES[n];return IMAGE_FILES[n]||""}
function monsterImg(n,l=1,cls="monster-img"){const src=monsterImagePath(n,l);return `<img class="${cls}" src="${src}" alt="${escapeHtml(n)}" onerror="this.outerHTML='<div class=&quot;missing-img&quot;>Mynd vantar:<br>${escapeHtml(src)}</div>'">`}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function escapeJs(s){return String(s).replace(/\\/g,"\\\\").replace(/'/g,"\\'")}
function setScreen(h){clearTimers();app.innerHTML=h}
function clearTimers(){if(enemyAttackTimer){clearInterval(enemyAttackTimer);enemyAttackTimer=null}if(autoReturnTimer){clearTimeout(autoReturnTimer);autoReturnTimer=null}}
function getMonsterLevel(rec,m){return rec.owned_monsters?.[m]?.level||1}
function getBonusText(n,l){const info=MONSTERS[n];if(!info)return"";const pct=Math.round(getMonsterBonus(n,l)*100);if(info.special_operation==="all")return`${pct}% bónus í öllum aðgerðum`;return`${pct}% bónus í ${info.special_operation}`}
function getDisplayMonsterName(rec,n){const nick=rec?.owned_monsters?.[n]?.nickname||"";return nick?`${nick} (${n})`:n}
function getShortMonsterName(rec,n){return rec?.owned_monsters?.[n]?.nickname||n}
function getOwnedCount(rec){return orderedOwnedNames(rec).length}
function getMaxEvoCount(rec){return orderedOwnedNames(rec).filter(n=>(rec.owned_monsters[n]?.level||1)>=3).length}
function getMonsterTier(n){
  const info=MONSTERS[n]||{};
  return info.bonus_tier || (STARTER_MONSTERS[n]?"starter":(info.rarity||"common").toLowerCase());
}
function getMonsterBonus(n,l){
  const table=BONUS_BY_TIER[getMonsterTier(n)]||BONUS_BY_TIER.common;
  return table[l] ?? table[1] ?? 0;
}
function getEvolutionRequirement(n,nextLevel){
  const tier=getMonsterTier(n);
  if(tier==="starter")return 12;
  if(tier==="legendary")return 30;
  return 25;
}
function getStudentTotalBattles(rec){
  return Array.isArray(rec.sessions)?rec.sessions.length:0;
}
function getMonsterUnlockBattles(n){
  return Number(MONSTERS[n]?.unlock_battles||0);
}
function isMonsterUnlockedForStudent(rec,n){
  return getStudentTotalBattles(rec)>=getMonsterUnlockBattles(n);
}

function getMonsterType(n){return MONSTER_TYPES[n]||"math"}
function getSuperAttackLabel(type){
  return {fire:"ELD-OFURÁRÁS!",water:"VATNS-OFURÁRÁS!",earth:"JARÐ-OFURÁRÁS!",nature:"LAUF-OFURÁRÁS!",ice:"ÍS-OFURÁRÁS!",shadow:"SKUGGA-OFURÁRÁS!",storm:"ELDINGAR-OFURÁRÁS!",crystal:"KRISTAL-OFURÁRÁS!",star:"STJÖRNU-OFURÁRÁS!",metal:"JÁRN-OFURÁRÁS!",math:"TÖLU-OFURÁRÁS!"}[type]||"OFURÁRÁS!"
}
function getSuperAttackEmoji(type){
  return {fire:"🔥",water:"🌊",earth:"🪨",nature:"🍃",ice:"❄️",shadow:"🌑",storm:"⚡",crystal:"💎",star:"⭐",metal:"⚙️",math:"➗"}[type]||"✨"
}
function triggerAttackAnimation(type,isSuper=false){
  const arena=document.querySelector(".arena");
  if(!arena)return;
  const effect=document.createElement("div");
  effect.className=`attack-effect ${type} ${isSuper?"super":""}`;
  effect.textContent=getSuperAttackEmoji(type);
  arena.appendChild(effect);
  if(isSuper){
    const text=document.createElement("div");
    text.className="super-text";
    text.textContent=getSuperAttackLabel(type);
    arena.appendChild(text);
    setTimeout(()=>text.remove(),850);
  }
  setTimeout(()=>effect.remove(),850);
}

function getBatteryBars(){
  if(!battle)return 0;
  return Math.min(3, Math.floor((battle.currentStreak||0)/5));
}
function updateSuperBattery(){
  const el=document.getElementById("superBattery");
  if(!el||!battle)return;
  const bars=getBatteryBars();
  el.querySelectorAll(".battery-seg").forEach((seg,i)=>seg.classList.toggle("filled",i<bars));
}
function superBatteryHtml(){
  return `<div class="battery-wrap" title="Ofurárás hleðst á 5, 10 og 15 réttum í röð"><div class="battery-label">Ofur</div><div id="superBattery" class="battery"><div class="battery-seg"></div><div class="battery-seg"></div><div class="battery-seg"></div><div class="battery-tip"></div></div></div>`;
}
function triggerUltimateAttack(){
  if(!battle||battle.finished)return;
  battle.ultimateAttacks=(battle.ultimateAttacks||0)+1;
  const type=getMonsterType(battle.monster);
  const rec=getStudentRecord(battle.student);
  const displayName=getShortMonsterName(rec,battle.monster);
  battle.enemyHp=0;
  updateHp();
  document.body.insertAdjacentHTML("beforeend",`<div id="ultimateOverlay" class="ultimate-overlay ${type}"><div class="ultimate-card"><div class="ultimate-title">OFUR ÁRÁS!</div><div class="ultimate-monster">${monsterImg(battle.monster,battle.monsterLevel,"monster-img ultimate")}</div><div class="ultimate-name">${escapeHtml(displayName)}</div><div class="ultimate-effect">${getSuperAttackEmoji(type)}</div><div class="ultimate-subtitle">15 rétt í röð — óvinurinn fellur!</div></div></div>`);
  setTimeout(()=>{const overlay=document.getElementById("ultimateOverlay");if(overlay)overlay.remove();finishBattle(true)},1600);
}



function showStartScreen(){clearTimers();normalizeAllData();saveData();const names=Object.keys(data.students).sort();if(!selected.student&&names.length)selected.student=data.last_student||names[0];let rec=null;if(selected.student){rec=getStudentRecord(selected.student);selected.monster=rec.selected_monster||"Logi";if(!rec.owned_monsters[selected.monster])selected.monster=orderedOwnedNames(rec)[0]||"Logi"}const owned=rec?orderedOwnedNames(rec):[];const level=rec?getMonsterLevel(rec,selected.monster):1;setScreen(`<div class="screen"><div class="top-row"><div></div><button class="btn-red" onclick="tryFullscreen()">Fullscreen</button></div><h1 class="title">Skrímsla stærðfræði</h1><div class="subtitle">Leystu dæmi hratt til að sigra skrímsli, safna gulli og þróa skrímslin.</div><div class="layout"><div class="card"><h2>Nemandi</h2><div class="form-row"><label>Veldu nemanda</label><select id="studentSelect" onchange="onStudentChanged()"><option value="">-- velja --</option>${names.map(n=>`<option value="${escapeHtml(n)}" ${n===selected.student?"selected":""}>${escapeHtml(n)}</option>`).join("")}</select></div><div class="form-row"><label>Nýr nemandi</label><div style="display:grid;grid-template-columns:1fr auto;gap:8px;"><input id="newStudentName" placeholder="Nafn nemanda" onkeydown="if(event.key==='Enter') createStudent()"><button onclick="createStudent()">Nýr</button></div></div><div class="form-row"><label>Aðgerð</label><select id="operationSelect" onchange="selected.operationLabel=this.value">${Object.keys(OPERATIONS).map(o=>`<option ${o===selected.operationLabel?"selected":""}>${o}</option>`).join("")}</select></div><div class="form-row"><label>Erfiðleikastig</label><select id="difficultySelect" onchange="onRangeDifficultyChanged()"><option value="" ${selected.difficultyLabel===""?"selected":""}>-- ekkert valið --</option>${Object.keys(DIFFICULTIES).map(d=>`<option value="${d}" ${d===selected.difficultyLabel?"selected":""}>${d}</option>`).join("")}</select></div><div class="form-row"><label>Stærðfræðitöflur</label>${tableChooserHtml()}<div class="info-text">Ef þú velur töflur hreinsast venjulega erfiðleikastigið og æfingin verður margföldun.</div></div><div class="form-row"><label>Skrímsli</label><select id="monsterSelect" onchange="onMonsterChanged()">${owned.map(m=>`<option value="${escapeHtml(m)}" ${m===selected.monster?"selected":""}>${escapeHtml(m)}</option>`).join("")}</select></div><div class="button-stack"><button class="btn-green" onclick="startBattle()">Byrja bardaga</button><button class="btn-purple" onclick="showShop()">Búð</button><button class="btn-orange" onclick="showEvolution()">Þróun</button><button class="btn-green" onclick="showCollection()">Safn</button><button class="btn-gray" onclick="teacherLogin()">Kennarasvæði</button><button class="btn-orange" onclick="showInstallHelp()">Setja upp sem app</button></div></div><div class="card preview"><h2>${escapeHtml(rec?getShortMonsterName(rec,selected.monster):selected.monster||"Logi")}</h2>${monsterImg(selected.monster||"Logi",level)}<div class="info-text">${rec&&rec.owned_monsters[selected.monster]?.nickname?escapeHtml(selected.monster)+"<br>":""}${escapeHtml(MONSTERS[selected.monster]?.description||"")}</div><div class="gold-text">${rec?`${getBonusText(selected.monster,level)} | Gull: ${rec.gold} | Safn: ${getOwnedCount(rec)}/${Object.keys(MONSTERS).length}`:""}</div></div></div></div>`)}
window.tryFullscreen=()=>document.documentElement.requestFullscreen?.().catch(()=>{});
window.createStudent=function(){const input=document.getElementById("newStudentName");const name=input.value.trim();if(!name)return alert("Skrifaðu nafn nemanda.");if(data.students[name])return alert("Nemandi með þessu nafni er þegar til.");showStarterChoice(name)};
function showStarterChoice(name){const cards=Object.keys(STARTER_MONSTERS).map(m=>`<div class="shop-card"><h2>${escapeHtml(m)}</h2>${monsterImg(m,1,"monster-img small")}<div class="info-text">${escapeHtml(STARTER_MONSTERS[m].description)}</div><div class="gold-text">Byrjunarskrímsli</div><button class="btn-green" onclick="confirmStarterChoice('${escapeJs(name)}','${escapeJs(m)}')">Velja ${escapeHtml(m)}</button></div>`).join("");setScreen(`<div class="screen"><div class="top-row"><div><h1 style="margin:0;">Veldu byrjunarskrímsli</h1><div class="info-text">Nemandi: ${escapeHtml(name)}</div></div><button class="btn-gray" onclick="showStartScreen()">Til baka</button></div><div class="subtitle">Veldu eitt af þremur byrjunarskrímslum. Hin tvö fara í búðina og þarf að kaupa seinna.</div><div class="grid">${cards}</div></div>`)}
window.confirmStarterChoice=function(name,m){data.students[name]={gold:0,owned_monsters:{[m]:{level:1,battles_at_level:0,total_battles:0,nickname:""}},selected_monster:m,sessions:[]};selected.student=name;selected.monster=m;data.last_student=name;saveData();showStartScreen()};
window.onStudentChanged=function(){selected.student=document.getElementById("studentSelect").value;data.last_student=selected.student;if(selected.student){const rec=getStudentRecord(selected.student);selected.monster=rec.selected_monster||orderedOwnedNames(rec)[0]||"Logi"}saveData();showStartScreen()};
window.onMonsterChanged=function(){selected.monster=document.getElementById("monsterSelect").value;if(selected.student){const rec=getStudentRecord(selected.student);rec.selected_monster=selected.monster;saveData()}showStartScreen()};
function randInt(min,max){return Math.floor(Math.random()*(max-min+1))+min}
function chooseOperation(label){const op=OPERATIONS[label];return op==="mixed"?["-","+","*","/"][randInt(0,3)]:op}
function getSelectedTables(){
  return (selected.tables||[]).map(Number).filter(n=>n>=1&&n<=10).sort((a,b)=>a-b)
}
function tableDifficultyLabel(tables){
  if(!tables||!tables.length)return "";
  return "Töflur: "+tables.join(", ");
}
function updateTableSummary(){
  const summary=document.getElementById("tableSummary");
  if(summary){
    const tables=getSelectedTables();
    summary.textContent=tables.length?tableDifficultyLabel(tables):"Engar töflur valdar";
  }
}
window.onRangeDifficultyChanged=function(){
  const val=document.getElementById("difficultySelect").value;
  selected.difficultyLabel=val;
  if(val){
    selected.tables=[];
    document.querySelectorAll(".table-check").forEach(cb=>cb.checked=false);
    updateTableSummary();
  }
};
window.onTableChanged=function(){
  selected.tables=[...document.querySelectorAll(".table-check:checked")].map(cb=>Number(cb.value)).sort((a,b)=>a-b);
  if(selected.tables.length){
    selected.difficultyLabel="";
    selected.operationLabel="Margföldun ×";
    const op=document.getElementById("operationSelect");
    if(op)op.value="Margföldun ×";
    const diff=document.getElementById("difficultySelect");
    if(diff)diff.value="";
  }
  updateTableSummary();
};
function tableChooserHtml(){
  const selectedTables=getSelectedTables();
  return `<details class="table-dropdown"><summary id="tableSummary">${selectedTables.length?tableDifficultyLabel(selectedTables):"Engar töflur valdar"}</summary><div class="table-options">${MULTIPLICATION_TABLES.map(n=>`<label class="table-option"><input class="table-check" type="checkbox" value="${n}" ${selectedTables.includes(n)?"checked":""} onchange="onTableChanged()"> ${n} sinnum taflan</label>`).join("")}</div></details>`;
}

function generateProblem(){
  let op,a,b,ans;
  if(battle.difficultyMode==="tables"){
    const tables=(battle.tables&&battle.tables.length?battle.tables:[1]).map(Number);
    const table=tables[randInt(0,tables.length-1)];
    const other=randInt(1,10);
    if(Math.random()<0.5){a=table;b=other}else{a=other;b=table}
    op="*";
    ans=a*b;
  }else{
    const[min,max]=DIFFICULTIES[battle.difficultyLabel]||DIFFICULTIES["1–5"];
    op=chooseOperation(battle.operationLabel);
    a=randInt(min,max);b=randInt(min,max);
    if(op==="+")ans=a+b;
    else if(op==="-"){if(b>a)[a,b]=[b,a];ans=a-b}
    else if(op==="*")ans=a*b;
    else{b=randInt(Math.max(1,min),Math.max(1,max));ans=randInt(min,max);a=b*ans}
  }
  battle.currentAnswer=ans;
  battle.currentProblemOperation=op;
  battle.problemStart=performance.now();
  const sym=op==="*"?"×":op==="/"?"÷":op;
  const width=Math.max(String(a).length,String(b).length+2,4);
  return`${String(a).padStart(width," ")}\n${(sym+" "+b).padStart(width," ")}\n${"─".repeat(width)}`
}
function startBattle(){
  if(!selected.student)return alert("Veldu eða búðu til nemanda fyrst.");
  const rec=getStudentRecord(selected.student);
  if(!rec.owned_monsters[selected.monster])return alert("Nemandi á ekki þetta skrímsli.");
  const tables=getSelectedTables();
  const difficultyMode=tables.length?"tables":"range";
  if(difficultyMode==="range"&&!selected.difficultyLabel)return alert("Veldu erfiðleikastig eða veldu eina eða fleiri stærðfræðitöflur.");
  if(difficultyMode==="tables")selected.operationLabel="Margföldun ×";
  const difficultyLabel=difficultyMode==="tables"?tableDifficultyLabel(tables):selected.difficultyLabel;
  rec.selected_monster=selected.monster;
  data.last_student=selected.student;
  saveData();
  const enemy={...ENEMY_MONSTERS[randInt(0,ENEMY_MONSTERS.length-1)]};
  battle={student:selected.student,operationLabel:selected.operationLabel,difficultyLabel,difficultyMode,tables,monster:selected.monster,monsterLevel:getMonsterLevel(rec,selected.monster),enemy,enemyMaxHp:enemy.hp,enemyHp:enemy.hp,playerMaxHp:220,playerHp:220,correct:0,wrong:0,currentStreak:0,bestStreak:0,totalDamage:0,superAttacks:0,ultimateAttacks:0,correctTimes:[],answerInput:"",startTime:performance.now(),finished:false};
  showBattleScreen();
  setNewProblem();
  enemyAttackTimer=setInterval(()=>{if(!battle||battle.finished)return;battle.playerHp-=battle.enemy.attack;setStatus(`${battle.enemy.name} ræðst! -${battle.enemy.attack} HP`,"#fb7185");updateHp();if(battle.playerHp<=0)finishBattle(false)},battle.enemy.attack_interval)
}
function showBattleScreen(){setScreen(`<div class="battle-screen"><div class="arena"><button class="btn-red quit-in-arena" onclick="showStartScreen()">Hætta</button><div class="combatant player-combatant"><div class="combatant-name">${escapeHtml(getShortMonsterName(getStudentRecord(battle.student),battle.monster))}</div><div class="monster-battery-row">${monsterImg(battle.monster,battle.monsterLevel,"monster-img battle")}${superBatteryHtml()}</div><div id="playerHpText" class="hp-text"></div><div class="hpbar"><div id="playerHpFill" class="hpfill"></div></div></div><div id="battleStatus" class="status"></div><div class="combatant"><div class="combatant-name">${escapeHtml(battle.enemy.name)}</div>${monsterImg(battle.enemy.name,1,"monster-img battle")}<div id="enemyHpText" class="hp-text"></div><div class="hpbar"><div id="enemyHpFill" class="hpfill"></div></div></div></div><div class="math-area"><div class="math-title">Reiknaðu dæmið:</div><div class="problem-box"><div id="problem" class="problem"></div></div><div class="answer-row"><div class="answer-label">Svar:</div><div id="answerBox" class="answer-box" onclick="focusTouchInput()"> </div><button class="btn-green" onclick="submitAnswer()">Svara</button></div><input id="touchInput" class="touch-input" inputmode="numeric" pattern="[0-9]*" autocomplete="off" enterkeyhint="done" oninput="touchInputChanged()"><div class="mobile-keypad">${["1","2","3","⌫","4","5","6","-","7","8","9","C",".","0",",","↵"].map(k=>`<button class="${k==="↵"?"btn-green":k==="C"?"btn-red":"btn-gray"}" onclick="keypadPress('${k}')">${k}</button>`).join("")}</div><div id="feedback" class="feedback"></div></div></div>`);document.addEventListener("keydown",battleKeyHandler);updateHp();updateSuperBattery();setTimeout(focusTouchInput,150)}
function battleKeyHandler(e){if(!battle||battle.finished)return;if(e.key==="Enter"){e.preventDefault();submitAnswer()}else if(e.key==="Backspace"){e.preventDefault();battle.answerInput=battle.answerInput.slice(0,-1);updateAnswerBox()}else if(e.key==="Escape"||e.key==="Delete"){battle.answerInput="";updateAnswerBox()}else if(/^[0-9\-.,]$/.test(e.key)){e.preventDefault();battle.answerInput+=e.key;updateAnswerBox()}}
function updateAnswerBox(){const box=document.getElementById("answerBox");if(box)box.textContent=battle.answerInput||" ";const input=document.getElementById("touchInput");if(input&&input.value!==battle.answerInput)input.value=battle.answerInput}
window.focusTouchInput=function(){const input=document.getElementById("touchInput");if(input){input.focus({preventScroll:true});input.click()}};
window.touchInputChanged=function(){if(!battle||battle.finished)return;const input=document.getElementById("touchInput");battle.answerInput=(input.value||"").replace(/[^0-9\-.,]/g,"");updateAnswerBox()};
window.keypadPress=function(key){if(!battle||battle.finished)return;if(key==="↵")submitAnswer();else if(key==="⌫")battle.answerInput=battle.answerInput.slice(0,-1);else if(key==="C")battle.answerInput="";else battle.answerInput+=key;updateAnswerBox();focusTouchInput()};
function updateHp(){if(!battle)return;document.getElementById("playerHpText").textContent=`HP: ${Math.max(0,Math.floor(battle.playerHp))}/${battle.playerMaxHp}`;document.getElementById("enemyHpText").textContent=`HP: ${Math.max(0,Math.floor(battle.enemyHp))}/${battle.enemyMaxHp}`;document.getElementById("playerHpFill").style.width=`${Math.max(0,battle.playerHp)/battle.playerMaxHp*100}%`;document.getElementById("enemyHpFill").style.width=`${Math.max(0,battle.enemyHp)/battle.enemyMaxHp*100}%`}
function setStatus(t,c="#facc15"){const el=document.getElementById("battleStatus");if(el){el.textContent=t;el.style.color=c}}
function setNewProblem(){if(!battle||battle.finished)return;document.getElementById("problem").textContent=generateProblem();battle.answerInput="";updateAnswerBox();document.getElementById("feedback").textContent="";setTimeout(focusTouchInput,50)}
function calculateBaseDamage(s){if(s<=3)return[12,"Hröð"];if(s<=6)return[8,"Góð"];return[5,"Róleg"]}
function monsterBonusMultiplier(n,l,op){const info=MONSTERS[n];if(!info)return 1;const bonus=getMonsterBonus(n,l);if(info.special_operation==="all")return 1+bonus;if(info.special_operation===op)return 1+bonus;return 1}
window.submitAnswer=function(){if(!battle||battle.finished)return;const raw=battle.answerInput.trim().replace(",",".");if(!raw)return;const answer=Number(raw);if(!Number.isFinite(answer)){document.getElementById("feedback").textContent="Skrifaðu tölu.";battle.answerInput="";updateAnswerBox();return}if(answer===battle.currentAnswer){const sec=(performance.now()-battle.problemStart)/1000;const[base,label]=calculateBaseDamage(sec);battle.correct++;battle.currentStreak++;const chargeHit=battle.currentStreak>0&&battle.currentStreak%5===0;const isUltimate=battle.currentStreak>0&&battle.currentStreak%15===0;let dmg=Math.round(base*monsterBonusMultiplier(battle.monster,battle.monsterLevel,battle.currentProblemOperation));if(chargeHit&&!isUltimate){dmg*=2;battle.superAttacks=(battle.superAttacks||0)+1;}battle.bestStreak=Math.max(battle.bestStreak,battle.currentStreak);battle.correctTimes.push(sec);battle.totalDamage+=dmg;const type=getMonsterType(battle.monster);if(isUltimate){battle.superAttacks=(battle.superAttacks||0)+1;updateSuperBattery();triggerAttackAnimation(type,true);document.getElementById("feedback").textContent=`OFUR ÁRÁS! 15 rétt í röð!`;document.getElementById("feedback").style.color="#fde047";setStatus(`${getSuperAttackEmoji(type)} OFUR ÁRÁS!`,"#fde047");triggerUltimateAttack();return}else{battle.enemyHp-=dmg;triggerAttackAnimation(type,chargeHit);document.getElementById("feedback").textContent=chargeHit?`${getSuperAttackLabel(type)} ${battle.currentStreak} rétt í röð! ${label} árás: -${dmg} HP`:`Rétt! ${label} árás: -${dmg} HP`;document.getElementById("feedback").style.color=chargeHit?"#fde047":"#4ade80";setStatus(chargeHit?`${getSuperAttackEmoji(type)} HLAÐIN ÁRÁS! 2x skaði`:"Árás!","#4ade80");updateHp();updateSuperBattery();if(battle.enemyHp<=0){finishBattle(true);return}setTimeout(setNewProblem,chargeHit?260:120)}}else{battle.wrong++;battle.currentStreak=0;updateSuperBattery();battle.answerInput="";updateAnswerBox();document.getElementById("feedback").textContent="Rangt svar, prófaðu aftur. Batteríið tæmist.";document.getElementById("feedback").style.color="#fb7185"}};
function buildResult(won){const dur=Math.max(.01,(performance.now()-battle.startTime)/1000);const cpm=battle.correct/(dur/60);const wpm=battle.wrong/(dur/60);const avg=battle.correctTimes.length?battle.correctTimes.reduce((a,b)=>a+b,0)/battle.correctTimes.length:0;const rec=getStudentRecord(battle.student);const same=rec.sessions.filter(s=>s.operation_label===battle.operationLabel&&s.difficulty_label===battle.difficultyLabel);const best=same.length?Math.max(...same.map(s=>Number(s.correct_per_min||0))):0;return{timestamp:new Date().toISOString().slice(0,19),student:battle.student,operation_label:battle.operationLabel,difficulty_label:battle.difficultyLabel,difficulty_mode:battle.difficultyMode||"range",tables:battle.tables||[],monster:battle.monster,enemy:battle.enemy.name,won,duration_seconds:dur,correct:battle.correct,wrong:battle.wrong,correct_per_min:cpm,wrong_per_min:wpm,avg_correct_answer_time:avg,best_streak:battle.bestStreak,total_damage:battle.totalDamage,new_best:battle.correct>0&&cpm>best,super_attacks:battle.superAttacks||0,ultimate_attacks:battle.ultimateAttacks||0}}
function recordMonsterBattleAndEvolve(n){const rec=getStudentRecord(battle.student);if(!rec.owned_monsters[n])rec.owned_monsters[n]={level:1,battles_at_level:0,total_battles:0,nickname:""};const md=rec.owned_monsters[n];md.total_battles=(md.total_battles||0)+1;md.battles_at_level=(md.battles_at_level||0)+1;let evolved=null;if(md.level<3){const next=md.level+1,req=getEvolutionRequirement(n,next);if(md.battles_at_level>=req){md.level=next;md.battles_at_level=0;evolved=next}}return{evolved_to:evolved,level:md.level,battles_at_level:md.battles_at_level,total_battles:md.total_battles}}
function calculateGold(result,won){const correct=Number(result.correct||0),dm=result.difficulty_mode==="tables"?1:(DIFFICULTY_GOLD_MULTIPLIER[result.difficulty_label]||1),om=OPERATION_GOLD_MULTIPLIER[result.operation_label]||1,mult=dm*om;const total=Math.round(1*mult+correct*.5*mult+(won?3*mult:0)+(result.new_best?5*mult:0));return Math.max(MIN_GOLD_PER_BATTLE,total)}
function finishBattle(won){if(!battle||battle.finished)return;battle.finished=true;document.removeEventListener("keydown",battleKeyHandler);clearTimers();const result=buildResult(won);const evo=recordMonsterBattleAndEvolve(battle.monster);result.evolved_to=evo.evolved_to;result.monster_level_after=evo.level;result.monster_battles_at_level_after=evo.battles_at_level;result.monster_total_battles_after=evo.total_battles;result.gold_earned=calculateGold(result,won);result.gold_difficulty_multiplier=result.difficulty_mode==="tables"?1:(DIFFICULTY_GOLD_MULTIPLIER[result.difficulty_label]||1);result.gold_operation_multiplier=OPERATION_GOLD_MULTIPLIER[result.operation_label]||1;const rec=getStudentRecord(battle.student);rec.gold+=result.gold_earned;rec.sessions.push(result);saveData();showResult(result)}
function resultRow(label,value){return`<div class="result-row"><b>${escapeHtml(label)}:</b><span>${escapeHtml(value)}</span></div>`}
function showResult(r){const mult=(Number(r.gold_difficulty_multiplier||1)*Number(r.gold_operation_multiplier||1)).toFixed(2);setScreen(`<div class="screen"><h1 class="title" style="color:${r.won?"#4ade80":"#fb7185"}">${r.won?"Sigur!":"Þú tapaðir — prófaðu aftur!"}</h1>${r.new_best?`<div class="subtitle" style="color:#facc15;font-weight:900;">NÝTT MET Í ÞESSU STIGI!</div>`:""}${r.evolved_to?`<div class="subtitle" style="color:#facc15;font-weight:900;">${escapeHtml(getShortMonsterName(getStudentRecord(r.student),r.monster))} þróaðist í stig ${r.evolved_to}!</div>`:""}<div class="result-card">${resultRow("Nemandi",r.student)}${resultRow("Aðgerð",r.operation_label)}${resultRow(r.difficulty_mode==="tables"?"Töflur":"Stig",r.difficulty_label)}${resultRow("Skrímsli",getDisplayMonsterName(getStudentRecord(r.student),r.monster))}${resultRow("Tími",`${r.duration_seconds.toFixed(1)} sek.`)}${resultRow("Rétt",r.correct)}${resultRow("Röng",r.wrong)}${resultRow("Rétt/mín",r.correct_per_min.toFixed(1))}${resultRow("Besta röð",r.best_streak)}${resultRow("Ofurárásir",r.super_attacks||0)}${resultRow("Ofur sigurárás",r.ultimate_attacks||0)}${resultRow("Gull",r.gold_earned)}${resultRow("Gull margfaldari",`${mult}x`)}</div><div class="subtitle">Fer sjálfkrafa aftur á byrjandaskjá eftir nokkrar sekúndur...</div><button class="btn-gray bottom-button" onclick="showStartScreen()">Fara strax á aðalskjá</button></div>`);autoReturnTimer=setTimeout(showStartScreen,AUTO_RETURN_MS)}
function showShop(){if(!selected.student)return alert("Veldu nemanda fyrst.");const rec=getStudentRecord(selected.student);saveData();const names=[...Object.keys(STARTER_MONSTERS),...Object.keys(SPECIAL_MONSTERS)];const totalBattles=getStudentTotalBattles(rec);const cards=names.map(n=>{const info=MONSTERS[n],owned=!!rec.owned_monsters[n],isStarter=!!STARTER_MONSTERS[n],unlock=getMonsterUnlockBattles(n),unlocked=owned||isMonsterUnlockedForStudent(rec,n),remaining=Math.max(0,unlock-totalBattles);const evo=isStarter?"Þróast með bardögum: 0% → 3% → 6%":info.bonus_tier==="legendary"?"Þróast með bardögum: 8% → 16% → 25%":"Þróast með bardögum eftir verðflokki";return`<div class="shop-card ${unlocked?"":"locked"}"><h2>${escapeHtml(unlocked||owned?n:"???")}</h2>${unlocked||owned?monsterImg(n,1,"monster-img small"):`<div class="missing-img">Læst<br>${remaining} bardagar eftir</div>`}<div class="info-text">${unlocked||owned?escapeHtml(info.description):`Opnast eftir ${unlock} bardaga.`}</div><div class="gold-text">Verð: ${info.buy_cost} gull</div><div class="info-text">${evo}</div><div class="info-text">Opnun: ${unlock===0?"alltaf opið":unlock+" bardagar"} | Þú: ${totalBattles}</div>${owned?`<div class="gold-text">Þú átt þetta skrímsli</div>`:!unlocked?`<button class="btn-gray" disabled>Læst</button>`:`<button class="btn-purple" onclick="buyMonster('${escapeJs(n)}')">Kaupa</button>`}</div>`}).join("");setScreen(`<div class="screen"><div class="top-row"><div><h1 style="margin:0;">Búð</h1><div class="info-text">Nemandi: ${escapeHtml(selected.student)} | Gull: ${rec.gold}</div></div><div><button class="btn-green" onclick="showCollection()">Safn</button><button class="btn-orange" onclick="showEvolution()">Þróun</button><button class="btn-gray" onclick="showStartScreen()">Til baka</button></div></div><div class="subtitle">Kauptu fleiri skrímsli. Hin byrjunarskrímslin og sérhæfð skrímsli fást í búðinni. Þróun fæst með bardögum, ekki gulli.</div><div class="grid">${cards}</div></div>`)}
window.buyMonster=function(n){const rec=getStudentRecord(selected.student);const info=MONSTERS[n];if(!info)return;if(rec.owned_monsters[n])return alert("Þú átt þetta skrímsli nú þegar.");if(!isMonsterUnlockedForStudent(rec,n))return alert(`Þetta skrímsli er læst. Það opnast eftir ${getMonsterUnlockBattles(n)} bardaga.`);if(rec.gold<info.buy_cost)return alert("Þú átt ekki nóg gull.");rec.gold-=info.buy_cost;let nickname=prompt(`Þú keyptir ${n}! Viltu gefa skrímslinu þínu gælunafn?\n\nÞú mátt líka skilja þetta eftir autt.`,"");nickname=(nickname||"").trim().slice(0,24);rec.owned_monsters[n]={level:1,battles_at_level:0,total_battles:0,nickname};selected.monster=n;rec.selected_monster=n;saveData();alert(nickname?`Þú keyptir ${n} og nefndir það ${nickname}!`:`Þú keyptir ${n}!`);showShop()};

window.renameMonster=function(n){
  const rec=getStudentRecord(selected.student);
  if(!rec.owned_monsters[n])return;
  const current=rec.owned_monsters[n].nickname||"";
  let nickname=prompt(`Nýtt gælunafn fyrir ${n}:`,current);
  if(nickname===null)return;
  nickname=nickname.trim().slice(0,24);
  rec.owned_monsters[n].nickname=nickname;
  saveData();
  showCollection();
};

function showCollection(){
  if(!selected.student)return alert("Veldu nemanda fyrst.");
  const rec=getStudentRecord(selected.student);
  saveData();
  const total=Object.keys(MONSTERS).length;
  const owned=getOwnedCount(rec);
  const maxed=getMaxEvoCount(rec);
  const cards=Object.keys(MONSTERS).map(n=>{
    const has=!!rec.owned_monsters[n];
    const md=rec.owned_monsters[n]||{};
    const level=md.level||1;
    const display=has?getShortMonsterName(rec,n):"???";
    const typeText=has?(md.nickname?`${escapeHtml(n)}<br>`:""):"Ófundið / ekki keypt";
    let prog="";
    if(has){
      if(level>=3)prog=`<div class="gold-text">Stig 3 — fullþróað</div>`;
      else{
        const next=level+1,req=getEvolutionRequirement(n,next),done=md.battles_at_level||0,pct=Math.min(100,done/req*100);
        prog=`<div class="info-text">Stig ${level} → ${next}: ${done}/${req}</div><div class="progress"><div class="progress-fill" style="width:${pct}%"></div></div>`;
      }
    }else{
      prog=`<div class="info-text">Opnast í búð eftir ${getMonsterUnlockBattles(n)} bardaga.</div>`;
    }
    return `<div class="collection-card ${has?"owned":"locked"}"><h2>${escapeHtml(display)}</h2>${has?monsterImg(n,level,"monster-img small"):`<div class="missing-img">???</div>`}<div class="info-text">${typeText}<b>${escapeHtml(MONSTERS[n].rarity||"Common")}</b></div>${prog}${has?`<button class="btn-gray" onclick="renameMonster('${escapeJs(n)}')">Breyta nafni</button>`:""}</div>`;
  }).join("");
  setScreen(`<div class="screen"><div class="top-row"><div><h1 style="margin:0;">Skrímslasafn</h1><div class="info-text">Nemandi: ${escapeHtml(selected.student)} | Safnað: ${owned}/${total} | Fullþróuð: ${maxed}/${total} | Gull: ${rec.gold}</div></div><div><button class="btn-purple" onclick="showShop()">Búð</button><button class="btn-orange" onclick="showEvolution()">Þróun</button><button class="btn-gray" onclick="showStartScreen()">Til baka</button></div></div><div class="subtitle">Hér sérðu öll safnanleg skrímsli, hvaða skrímsli þú átt og hversu langt þau eru komin í þróun.</div><div class="grid">${cards}</div></div>`);
}

function showEvolution(){if(!selected.student)return alert("Veldu nemanda fyrst.");const rec=getStudentRecord(selected.student);saveData();const cards=orderedOwnedNames(rec).map(n=>{const md=rec.owned_monsters[n],level=md.level||1,total=md.total_battles||0;let progress;if(level>=3)progress=`<div class="gold-text">Hámarksþróun náð</div><div class="info-text">Heildarbardagar: ${total}</div>`;else{const next=level+1,req=EVOLUTION_BATTLES_REQUIRED[next]||999999,done=md.battles_at_level||0,pct=Math.min(100,done/req*100);progress=`<div class="info-text"><b>Þróun í stig ${next}</b></div><div class="gold-text">${done}/${req} bardagar</div><div class="progress"><div class="progress-fill" style="width:${pct}%"></div></div><div class="info-text">Eftir: ${Math.max(0,req-done)} bardagar</div><div class="info-text">Heildarbardagar: ${total}</div>`}return`<div class="evo-card"><h2>${escapeHtml(getShortMonsterName(rec,n))}</h2>${monsterImg(n,level,"monster-img small")}<div class="info-text"><b>Núverandi stig: ${level}</b></div><div class="gold-text">${escapeHtml(getBonusText(n,level))}</div>${progress}</div>`}).join("");setScreen(`<div class="screen"><div class="top-row"><div><h1 style="margin:0;">Þróun skrímsla</h1><div class="info-text">Nemandi: ${escapeHtml(selected.student)} | Þróun fæst með bardögum, ekki gulli.</div></div><div><button class="btn-purple" onclick="showShop()">Búð</button><button class="btn-gray" onclick="showStartScreen()">Til baka</button></div></div><div class="subtitle" style="color:#facc15;font-weight:900;">Byrjunarskrímsli: 12 + 12 bardagar. Flest önnur: 25 + 25. Legendary: 30 + 30.</div><div class="grid">${cards}</div></div>`)}
function teacherLogin(){const pass=prompt("Lykilorð kennara:");if(pass===TEACHER_PASSWORD)showTeacher();else if(pass!==null)alert("Rangt lykilorð.")}
function showTeacher(){const students=Object.keys(data.students).sort(),student=selected.student&&data.students[selected.student]?selected.student:(students[0]||"");setScreen(`<div class="screen"><h1 style="margin-top:0;">Kennarasvæði</h1><div class="teacher-controls"><div class="field"><label>Nemandi</label><select id="teacherStudent">${students.map(s=>`<option ${s===student?"selected":""}>${escapeHtml(s)}</option>`).join("")}</select></div><div class="field"><label>Aðgerð</label><select id="teacherOperation"><option>Öll</option>${Object.keys(OPERATIONS).map(o=>`<option>${o}</option>`).join("")}</select></div><div class="field"><label>Stig</label><select id="teacherDifficulty"><option>Öll</option>${Object.keys(DIFFICULTIES).map(d=>`<option>${d}</option>`).join("")}</select></div><button onclick="renderTeacherData()">Skoða gögn</button><button class="btn-green" onclick="renderTeacherGraph()">Skoða línurit</button><button class="btn-gray" onclick="showStartScreen()">Til baka</button></div><div id="teacherSummary" class="summary"></div><div id="teacherContent"></div></div>`);renderTeacherData()}
function getTeacherRows(){const student=document.getElementById("teacherStudent").value,op=document.getElementById("teacherOperation").value,diff=document.getElementById("teacherDifficulty").value,rec=getStudentRecord(student);return rec.sessions.filter(s=>(op==="Öll"||s.operation_label===op)&&(diff==="Öll"||s.difficulty_label===diff)).sort((a,b)=>String(a.timestamp).localeCompare(String(b.timestamp)))}
function updateTeacherSummary(rows){const student=document.getElementById("teacherStudent").value,rec=getStudentRecord(student),el=document.getElementById("teacherSummary");if(!rows.length){el.textContent="Engar tilraunir passa við þessar síur.";return}const vals=rows.map(r=>Number(r.correct_per_min||0)),latest=vals.at(-1),best=Math.max(...vals),last5=vals.slice(-5),avg5=last5.reduce((a,b)=>a+b,0)/last5.length,wins=rows.filter(r=>r.won).length;el.textContent=`Tilraunir: ${rows.length} | Sigrar: ${wins} | Nýjasta rétt/mín: ${latest.toFixed(1)} | Besta rétt/mín: ${best.toFixed(1)} | Meðaltal síðustu 5: ${avg5.toFixed(1)} | Gull: ${rec.gold}`}
window.renderTeacherData=function(){const rows=getTeacherRows();updateTeacherSummary(rows);document.getElementById("teacherContent").innerHTML=`<div class="table-wrap"><table><thead><tr><th>Dagsetning</th><th>Aðgerð</th><th>Stig</th><th>Útkoma</th><th>Tími</th><th>Rétt</th><th>Röng</th><th>Rétt/mín</th><th>Besta röð</th><th>Skrímsli</th><th>Gull</th></tr></thead><tbody>${[...rows].reverse().map(s=>`<tr><td>${escapeHtml(String(s.timestamp||"").slice(0,16).replace("T"," "))}</td><td>${escapeHtml(s.operation_label)}</td><td>${escapeHtml(s.difficulty_label)}</td><td>${s.won?"Sigur":"Tap"}</td><td>${Number(s.duration_seconds||0).toFixed(1)}s</td><td>${s.correct||0}</td><td>${s.wrong||0}</td><td>${Number(s.correct_per_min||0).toFixed(1)}</td><td>${s.best_streak||0}</td><td>${escapeHtml(s.monster||"")}</td><td>${s.gold_earned||0}</td></tr>`).join("")}</tbody></table></div>`};
window.renderTeacherGraph=function(){const rows=getTeacherRows();updateTeacherSummary(rows);document.getElementById("teacherContent").innerHTML=`<div class="graph-wrap"><canvas id="teacherGraph"></canvas></div>`;const canvas=document.getElementById("teacherGraph"),dpr=window.devicePixelRatio||1,rect=canvas.getBoundingClientRect();canvas.width=Math.floor(rect.width*dpr);canvas.height=Math.floor(rect.height*dpr);const ctx=canvas.getContext("2d");ctx.scale(dpr,dpr);drawGraph(ctx,rect.width,rect.height,rows)};
function drawGraph(ctx,w,h,rows){ctx.fillStyle="#f8fafc";ctx.fillRect(0,0,w,h);const ml=70,mr=30,mt=35,mb=60,pw=w-ml-mr,ph=h-mt-mb;ctx.strokeStyle="#334155";ctx.lineWidth=2;ctx.strokeRect(ml,mt,pw,ph);if(!rows.length){ctx.fillStyle="#334155";ctx.font="bold 18px Arial";ctx.textAlign="center";ctx.fillText("Engin gögn til að sýna.",w/2,h/2);return}const vals=rows.map(r=>Number(r.correct_per_min||0));let maxY=Math.max(...vals);if(maxY<=0)maxY=1;maxY*=1.15;ctx.font="10px Arial";ctx.textAlign="right";ctx.fillStyle="#334155";for(let i=0;i<=5;i++){const v=maxY*i/5,y=h-mb-(v/maxY)*ph;ctx.strokeStyle="#e2e8f0";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(ml,y);ctx.lineTo(w-mr,y);ctx.stroke();ctx.fillText(v.toFixed(1),ml-10,y+4)}const pts=vals.map((v,i)=>[vals.length===1?ml+pw/2:ml+i/(vals.length-1)*pw,h-mb-(v/maxY)*ph,v]);ctx.strokeStyle="#2563eb";ctx.lineWidth=3;ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.stroke();pts.forEach(([x,y,v],i)=>{ctx.fillStyle="#1d4ed8";ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fill();ctx.strokeStyle="white";ctx.lineWidth=2;ctx.stroke();if(pts.length<=12||i===0||i===pts.length-1||i%Math.max(1,Math.floor(pts.length/8))===0){ctx.fillStyle="#1e293b";ctx.font="bold 9px Arial";ctx.textAlign="center";ctx.fillText(v.toFixed(1),x,y-14)}});const latest=vals.at(-1),best=Math.max(...vals),last5=vals.slice(-5),avg5=last5.reduce((a,b)=>a+b,0)/last5.length;ctx.fillStyle="#0f172a";ctx.font="bold 12px Arial";ctx.textAlign="center";ctx.fillText(`Nýjasta: ${latest.toFixed(1)} rétt/mín | Besta: ${best.toFixed(1)} | Meðaltal síðustu 5: ${avg5.toFixed(1)}`,w/2,mt-14)}
window.showInstallHelp=async function(){if(deferredInstallPrompt){deferredInstallPrompt.prompt();try{await deferredInstallPrompt.userChoice}catch{}deferredInstallPrompt=null;return}setScreen(`<div class="screen"><div class="top-row"><h1 style="margin:0;">Setja upp sem app</h1><button class="btn-gray" onclick="showStartScreen()">Til baka</button></div><div class="card" style="max-width:800px;margin:20px auto;"><h2>Chromebook / Chrome</h2><div class="install-box"><b>1.</b> Opnaðu leikinn í Chrome.<br><b>2.</b> Smelltu á uppsetningarmerkið í slóðastikunni ef það birtist, eða þrjá punkta efst til hægri.<br><b>3.</b> Veldu <b>Install app</b> eða <b>Setja upp app</b>.</div><h2>iPad / iPhone</h2><div class="install-box"><b>1.</b> Opnaðu leikinn í Safari.<br><b>2.</b> Ýttu á <b>Share</b> hnappinn.<br><b>3.</b> Veldu <b>Add to Home Screen</b> / <b>Bæta við heimaskjá</b>.</div><p class="info-text">GitHub Pages styður uppsetningu sem PWA þegar síðan er komin á netið með HTTPS.</p></div></div>`)};
showStartScreen();
