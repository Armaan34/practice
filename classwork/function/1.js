//monopoly jail double dice roll check dnd
function rollDice() {
    function rollSingleDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
    var roll1 = rollSingleDice();
    var roll2 = rollSingleDice();
  
    console.log(`Roll 1: ${roll1}`);
    console.log(`Roll 2: ${roll2}`);
  
    if (roll1 === 6 && roll2 === 6) {
      console.log("get out of jail");
    } else {
      console.log("better luck next time");
    }
  }
  rollDice();
  