
let size = prompt("Enter the size of number");

// document.write(`<h1> Number of Users ${size}</h1>`);

let array = [];

for (let i = 0; i < size; i++) {
  let name =prompt("What's your name ?");
  array.push(name);
}

for(let i = 0; i < size; i++){
  document.write(`<li>${array[i]}</li>`);
  document.write("<br>");
}

