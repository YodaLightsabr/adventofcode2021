import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf8');

let lines = input.split('\n').map(line => {
    let numbers = line.split(' | ')[0].split(' ');
    let outputs = line.split(' | ')[1].split(' ');
    return { numbers, outputs };
});

let totalCouns = 0;

lines.forEach(line => {
    let ones = line.outputs.filter(item => item.length == 2).length;
    let fours = line.outputs.filter(item => item.length == 4).length;
    let sevens = line.outputs.filter(item => item.length == 3).length;
    let eights = line.outputs.filter(item => item.length == 7).length;
    let all = ones + fours + sevens + eights;
    totalCouns += all;
});

function lazyMatch (value1, value2) {
    if (value1.length !== value2.length) return false;
    if (value1.split('').filter(char => value2.includes(char)).length !== value1.length) return false;
    if (value2.split('').filter(char => value1.includes(char)).length !== value2.length) return false;
    return true;
}

let outputTotal = 0;
let all = lines.map(line => {
    let { numbers, outputs } = line;
    let positions = {};
    let possible = {};
    let one = numbers.filter(num => num.length == 2)[0];
    let four = numbers.filter(num => num.length == 4)[0];
    let seven = numbers.filter(num => num.length == 3)[0];
    seven.split('').forEach(char => {
        if (!one.includes(char)) positions.a = char;
    });
    let possibleBD = four.split('').filter(char => !one.includes(char));
    let five = numbers.filter(num => num.length == 5 && num.includes(possibleBD[0]) && num.includes(possibleBD[1]))[0];
    let twoOrThree = numbers.filter(num => num.length == 5 && !(
        num.includes(possibleBD[0]) && num.includes(possibleBD[1])
    ))[0];
    possibleBD.forEach(char => {
        if (!twoOrThree.includes(char)) positions.d = char;
    });
    positions.c = one.split('').filter(char => !five.includes(char))[0];
    positions.f = one.split('').filter(char => five.includes(char))[0];
    positions.b = four.split('').filter(char => char != positions.c && char != positions.f && char != positions.d)[0];
    let two = numbers.filter(num => num.length == 5 && num != five && !num.includes(positions.f))[0];
    let three = numbers.filter(num => num.length == 5 && num != five && num != two)[0];
    let six = numbers.filter(num => num.length == 6 && !num.includes(positions.c))[0];
    let nine = numbers.filter(num => num.length == 6 && num != six && num.split('').filter(a => three.includes(a)).length == three.length)[0];
    let eight = numbers.filter(num => num.length == 7)[0];
    let zero = numbers.filter(num => num.length == 6 && num != six && num != nine)[0];
    positions.e = six.split('').filter(char => five.includes(char))[0];
    positions.g = 'abcdefg'.split('').filter(char => !positions[char])[0];
    let digits = parseInt(outputs.map(output => {
        if (lazyMatch(output, one)) return 1;
        if (lazyMatch(output, two)) return 2;
        if (lazyMatch(output, three)) return 3;
        if (lazyMatch(output, four)) return 4;
        if (lazyMatch(output, five)) return 5;
        if (lazyMatch(output, six)) return 6;
        if (lazyMatch(output, seven)) return 7;
        if (lazyMatch(output, eight)) return 8;
        if (lazyMatch(output, nine)) return 9;
        if (lazyMatch(output, zero)) return 0;
    }).join(''));
     outputTotal += digits;
    return digits;
});



console.log([totalCouns, outputTotal ]) // solutions