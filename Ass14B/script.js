let N = prompt("Enter number of fields:");
let obj = {};

for (let i = 0; i < N; i++) {
  let key = prompt("Enter key:");
  let value = prompt("Enter value:");
  obj[key] = value;
}

for (let key in obj) {
  document.write(`<li>${key}:  ${obj[key]} </li> <br>`);
}
