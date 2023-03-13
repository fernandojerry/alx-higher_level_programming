#!/usr/bin/node

// A script that prints messages depending on number of arguments passed

const args = process.argv;

if (args.length === 2) {
  console.log('No argument');
} else if (args.length === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
