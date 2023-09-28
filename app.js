console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);


let magicNumber = 3;

let guessNumber = prompt("What is the magic number?");

if(guessNumber == magicNumber){
  console.log("congrats! You guessed the magic number!")
}else if(guessNumber > magicNumber){
  console.log("Your magic number is too high, try again!")
}else{
  console.log("Your magic number is too low, try again!")
}

let birthMonth = prompt("What is your birth month?");

switch(birthMonth){
  case "December" : console.log("Winter");
  break;
  case "January": console.log("Winter");
  break;
  case "February": console.log("Winter");
  break;
  case "March": console.log("Srping");
  break;
  case "April": console.log("Srping");
  break;
  case "May": console.log("Srping");
  break;
  case "June": console.log("Summer");
  break;
  case "July": console.log("Summer");
  break;
  case "August": console.log("Summer");
  break;
  case "September": console.log("Fall");
  break;
  case "October": console.log("Fall");
  break;
  case "November": console.log("Fall");
  break;

}


let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

// if (typeId == "01") {
//   type = "Tank top";
// } else if (typeId == "02") {
//   type = "T-Shirt";
// } else if (typeId == "03") {
//   type = "Long Sleeve";
// } else if (typeId == "04") {
//   type == "Sweat Shirt";
// } else {
//   type = "Other";
// }

switch(typeId){
  case "01": type ="Tank top";
  break;
  case "02": type ="T-shirt";
  break;
  case "03": type ="Long Sleeve";
  break;
  case "04": type ="Sweat Shirt";
  break;
  default: "Other"
}

// if (colorId == "BL") {
//   color = "Black";
// } else if (colorId == "BU") {
//   color = "Blue";
// } else if (colorId == "RD") {
//   color = "Red";
// } else if (colorId == "PU") {
//   color = "Purple";
// } else {
//   color = "White";
// }

switch(colorId){
  case "BL": color = "Black";
  break;
  case "BU": color = "Blue";
  break;
  case "RD": color = "Red";
  break;
  case "PU": color = "Purple";
  break;
  default: "White";

}

// if (sizeId == "S") {
//   size = "Small";
// } else if (sizeId == "M") {
//   size = "Medium";
// } else if (sizeId == "L") {
//   size = "Large";
// } else if (sizeId == "XL") {
//   size = "Extra Large";
// } else {
//   size = "One Size Fits All";
// }

switch(sizeId){
  case "S": size = "Small";
  break;
  case "M": size = "Medium";
  break;
  case "L": size = "Large";
  break;
  case "XL": size = "Extra Large";
  break;
  default:"One Size Fits All";

}

console.log(`Product: ${size} ${color} ${type}`);