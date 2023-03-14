#!/usr/bin/node

const logs = [];
exports.logMe = function (item) {
  let count = 0;
  logs.forEach(Element => {
    count++;
  });
  logs.push(item);
  console.log(count + ': ' + item);
};
