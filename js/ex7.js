let userInput1 = prompt("Please enter a number: ");
let num1 = parseInt(userInput1);

userInput2 = prompt("Please enter a number: ");
let num2 = parseInt(userInput2);

if (isNaN(num1) || isNaN(num2) || !Number.isInteger(Number(userInput1)) || !Number.isInteger(Number(userInput2))) {
  document.getElementById("content").innerHTML = '<span style="color:red; font-weight:bold;">' + 'Error!' + '</span>';
  
  document.getElementById("content").innerHTML += '<span>' + ' You must enter integers. You entered "' + userInput1 + '" and "' + userInput2 + '". Try again.' + '</span>';
  
} 
else {
  var sum = num1 + num2;
  document.getElementById("content").innerHTML = num1 + ' + ' + num2 + ' = <span style="color:red; font-weight:bold;">' + sum + '</span>';
}