const numDice = prompt('how many dice you would like to throw? ');
let sumRoll = 0;
for (let i = 1; i <= numDice; i++) {
  sumRoll = sumRoll + Math.floor(Math.random() * 6) + 1;
}
document.querySelector(
    '#target').innerHTML = `The sum of the output of all dice you get is:  ${sumRoll}`;