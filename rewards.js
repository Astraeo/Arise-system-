function reward(){

  xp += 50;

  if(category === "strength") console.log("STR +1");
  if(category === "stamina") console.log("STA +1");
  if(category === "agility") console.log("AGI +1");

  updateLevel();
  save();
}
