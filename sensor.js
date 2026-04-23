let repCount = 0;
let lastTime = 0;
let activeType = "";

function startSensor(){

  window.addEventListener("devicemotion", e=>{

    if(activeType !== "sensor") return;

    let a = e.accelerationIncludingGravity;

    let total = Math.abs(a.x) + Math.abs(a.y) + Math.abs(a.z);

    let now = Date.now();

    if(total > 25 && now - lastTime > 600){
      repCount++;
      lastTime = now;

      console.log("REP:", repCount);
    }

    if(repCount >= 10){
      window.removeEventListener("devicemotion", arguments.callee);
      completeQuest();
    }
  });
}
