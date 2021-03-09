var bombe = [];
var safe = [];
var max = "";

// document.getElementById("bottone").addEventListener("click", function() {
//   if (document.getElementById("easy").checked) {
//     max = 100;
//     console.log(max);
//     iniziamo();
//
//   } else if (document.getElementById("medium").checked) {
//     max = 80;
//     console.log(max);
//     iniziamo();
//
//   } else if (document.getElementById("difficult").checked) {
//     max = 50;
//     console.log(max);
//     iniziamo();
//
//   } else {
//     console.log(ciao);
//   }
// });


// FUNCTIONS
function iniziamo() {

  while (bombe.length < 16) {
    var nrPc = randomNumberInRange(1, max);
    if (!bombe.includes(nrPc)) {
      bombe.push(nrPc);
    }
  }

  console.log(bombe);

  console.log("Il tuo punteggio è " + game(bombe, safe, max));

  console.log(safe);
}

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function game(bombe, safe, max){
  while (safe.length < max - 16) {
    var nrUser = parseInt(prompt("Dammi un numero tra 1 e "  + max + ":"));
    if (!isNaN(nrUser) && 1 <= nrUser && nrUser <= max && !safe.includes(nrUser)) {
      if (!bombe.includes(nrUser)) {
        safe.push(nrUser);
      } else {
        return safe.length
      }
    }
  }
  return safe.length
}
