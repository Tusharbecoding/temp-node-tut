// Sync File Module
// const { readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first);
// console.log(second);

// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)

//Async File Module
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(result);
    
})