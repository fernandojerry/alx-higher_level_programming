#!/usr/bin/node

// A script that prints arguments passed on it

const args = process.argv;

if (!process.argv[2]) {
  console.log('No argument');
} else {
  console.log(args[2]);
}
