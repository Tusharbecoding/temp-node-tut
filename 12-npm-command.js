// npm - global command comes with node
// npm --v

// local dependency - use it only in this file
// npm i <package-name>

// global dependency - use it in all files
// npm install -g <package-name>

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
