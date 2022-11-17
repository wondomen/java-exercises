let num1 = parseInt(prompt('Enter 1st integer number'));
let num2 = parseInt(prompt('Enter 2nd integer number'));
let num3= parseInt(prompt('Enter 3rd integer number'));
let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;
document.querySelector('#sum').innerHTML = 'The sum is: ' + sum ;
document.querySelector('#mult').innerHTML = 'The product is: ' + product;
document.querySelector('#avg').innerHTML = 'The average is: ' + average;


