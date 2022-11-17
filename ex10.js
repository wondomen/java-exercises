'use strict';
const diceNum = prompt('How many dice would you like to throw?');
const desireSum= +prompt('how many eyes in total would you like to get?');
const target = document.querySelector("#target");

let hit = 0;
const simulation = 10000;
for (let i = 0; i < simulation; i++){
  let eyeSum = 0;
  for (let j = 0; j < diceNum; j++){
    const dice = Math.floor(Math.random()*6) +1;
    eyeSum += dice

  }
  if (eyeSum === desireSum) hit++;
  console.log(eyeSum, desireSum, hit);
}
const probability = (hit/simulation) * 100;
target.innerHTML = `probability to get ${desireSum} with  ${diceNum} dice is ${probability.toFixed(2 )} %`;