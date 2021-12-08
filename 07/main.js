import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf8');

const crabs = input.split(',').map(Number);
let min = Math.min(...crabs);
let max = Math.max(...crabs);
console.log(crabs, min, max);

let possible = {};

for (let i = min; i <= max; i++) {
    let fuel = 0;
    crabs.forEach(crab => {
        let distance = Math.abs(crab - i);
        let thisFuel = 0;
        ' '.repeat(distance).split('').forEach((space, i) => {
            thisFuel += i + 1;
        });
        fuel += thisFuel;
    });
    possible[i] = fuel;
}

let best = Object.keys(possible)[Object.values(possible).indexOf(Math.min(...Object.values(possible)))];
let fuelOfBest = Math.min(...Object.values(possible));
console.log([fuelOfBest]);
