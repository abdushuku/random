

function myRandom(min, max) {
  rnum1 = Math.floor(Math.random() * 45 + 1);
  rnum2 = Math.floor(Math.random() * 45 + 1);
}
console.log(myRandom());

function amal() {
  operation = Math.floor(Math.random() * 4 + 1);
  if (operation == 1) {
    operation = "+";
  } else if (operation == 2) {
    operation = "-";
  } else if (operation == 3) {
    operation = "*";
  } else if (operation == 4) {
    operation = "/";
  }
  return operation;
}



for (var i = 0; i < 1; i++) {
  let userAnswer = +prompt(`${rnum1}${amal()}${rnum2}= ?`);
  let tueanswer =
    rnum1 + rnum2 == userAnswer
      ? `siz to'g'ri hisobaldiz`
      : `siz xato xisobaldiz !!` +
        `to'g'ri javob esa :` +
        (`${rnum1}${amal()}${rnum2}`);
  alert(tueanswer);
}
