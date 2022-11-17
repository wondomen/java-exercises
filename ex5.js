"use strict";
const year = prompt('Enter the year:');
if (year % 100 === 0 && year % 400 === 0) {
  document.querySelector('#target').innerHTML = `${year}: this is a leap year`;
} else if (year % 4 === 0) {
  document.querySelector('#target').innerHTML = `${year}:  this is a leap year`;
} else {
  document.querySelector('#target').innerHTML = `${year}:  this is not a leap year`;
}