let xp = +localStorage.xp || 0;
let level = +localStorage.level || 1;

let category = localStorage.category || "";
let questBoard = JSON.parse(localStorage.questBoard || "[]");
let activeQuest = "";

function save(){
  localStorage.xp = xp;
  localStorage.level = level;
  localStorage.category = category;
  localStorage.questBoard = JSON.stringify(questBoard);
}

function updateLevel(){
  let req = level * 100;

  while(xp >= req){
    xp -= req;
    level++;
    req = level * 100;
    console.log("LEVEL UP");
  }
}
