#!/usr/bin/node

const args = process.argv

if (isNaN(args[2])) {
  console.log('Missing number of occurrences');
} else if (args[2] <= 0) {

} else {
  for (let i = 1; i <= args[2]; i++) {
    console.log('C is fun');
  }
}
