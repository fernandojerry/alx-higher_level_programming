#!/usr/bin/node

// A script that prints messages depending on number of arguments passed:

const args = process.argv;

if (args.length === 2) {
	console.log('Arguments found');
} else if (args.length === 1) {
	console.log('Argument found');
} else {
	console.log('No argument');
}
