function initGame(){
  generateBoard();
  renderStats();
}

function renderStats(){
  document.getElementById("stats").innerText =
  "LEVEL: " + level + " | XP: " + xp;
}

function startQuest(i){

  let q = questBoard[i];

  activeQuest = q.t;
  activeType = q.type;

  if(q.type === "sensor"){
    repCount = 0;
    startSensor();
  }

  console.log("Quest started:", q.t);
}

function completeQuest(){

  reward();

  activeQuest = "";
  generateBoard();
  renderStats();
}
