function getQuests(cat){

  if(cat === "strength"){
    return [
      {t:"Push-ups x10",type:"sensor"},
      {t:"Squats x15",type:"manual"},
      {t:"Plank 30s",type:"manual"}
    ];
  }

  if(cat === "stamina"){
    return [
      {t:"Walk 0.5km",type:"gps"},
      {t:"Jog 1km",type:"gps"}
    ];
  }

  if(cat === "agility"){
    return [
      {t:"Jump training",type:"sensor"},
      {t:"Sprint drill",type:"manual"}
    ];
  }
}

function generateBoard(){

  let pool = getQuests(category);

  // shuffle
  pool = pool.sort(()=>Math.random()-0.5);

  // NO DUPLICATES
  let used = new Set();
  questBoard = [];

  for(let q of pool){
    if(!used.has(q.t)){
      questBoard.push(q);
      used.add(q.t);
    }
    if(questBoard.length === 3) break;
  }

  renderBoard();
}

function renderBoard(){

  let html = "";

  questBoard.forEach((q,i)=>{
    html += `<div class="quest" onclick="startQuest(${i})">${q.t}</div>`;
  });

  document.getElementById("questBoard").innerHTML = html;
}
