// console.log(Math.random()); // (0-1) , more than 0, less than 1
// 0 - base, 1 - edge
// console.log(Math.random()+2);//(2-3) not icnlusive of 3, base changed
// console.log(Math.random()*15); // (0-15) 14.9999
//console.log(Math.floor(Math.random()*10) + 3); //( 3 - 12)

function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
  
      if(dice1 === 6 && dice2 === 6){
          console.log("Get out of Jail Free");
      }else{
          console.log("Better luck next time");
      }
  
  }
  
  for(var i = 0; i<100;i++){
      rollDice();
  }