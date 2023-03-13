#!/usr/bin/node

const args = process.argv;
let row = '';

if (isNaN(args[2])) {
  console.log('Missing size');
} else if (args[2] <= 0) {
} else {
  for (let i = 0; i < args[2]; i++) {
    for (let j = 0; j < args[2]; j++) {
      row += 'X';
    }
    row += '\n';
  }
  console.log(row);
}
