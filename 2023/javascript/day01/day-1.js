const { join } = require("path");
const fs = require("fs").promises;

 fs.readFile(join(__dirname, "input.txt")).then((data) => {
  const inputList = data.toString().trim().split("\n");
  let sum = 0;
  inputList.forEach((input) => {
    const result = input.match(/\d/g);
    sum += parseInt(`${result[0]}${result[result.length - 1]}`, 10);
  })
  console.log(sum);
}).catch((error) => {
    console.log(error);
})