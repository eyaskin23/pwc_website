let name = prompt("Hello, what is your name?");
alert("Welcome " + name + ", it's a pleasure to greet you!");

let age = prompt("May I ask how old you are?");
let celsius = (age - 32) * 5/9;
alert("Your age would be: " + celsius + " in celsius!");

let numInput = prompt("Please enter an integer value:");  
let num = Number(numInput); 

let numInput2 = prompt("Please enter a second integer value:"); 
let num2 = Number(numInput2); 

alert("Let me show you what I can do with the numbers: " + num + " and " + num2);

//plus
let plus = num + num2;
alert(num + " + " + num2 + " = " + plus)

//minus
let minus = num - num2;
alert(num + " - " + num2 + " = " + minus)

//multiply
let multiply = num * num2;
alert(num + " * " + num2 + " = " + multiply)

//divide
let divide = num / num2;
alert(num + " / " + num2 + " = " + divide)

//modulo
let modulo = num % num2;
alert(num + " % " + num2 + " = " + modulo)

let decimal = Number(prompt("Please enter a value with a decimal part: "));
alert("Let me show you what I can do with the number " + decimal);

let negative = -(decimal);
alert("The negative of " + decimal + " is: " + negative);

let radiansDec = decimal * Math.PI / 180;

let sine = Math.sin(radiansDec);
alert("The sin of " + decimal + " is: " + sine);

let cosine = Math.cos(radiansDec);
alert("The sin of " + decimal + " is: " + cosine);

let power10 = decimal ** 10;
alert(decimal + " ^ 10 = " + power10);

let squareroot = Math.sqrt(decimal);
alert("The square root of " + decimal + " is: " + squareroot);

alert("Rounded " + decimal + " is: "+ Math.round(decimal));

alert("Floor of " + decimal + " is: " + Math.floor(decimal));

alert("Ceiling of " + decimal + " is: " + Math.ceil(decimal));

alert("Absolute value of " + decimal + " is: " + Math.abs(decimal));









