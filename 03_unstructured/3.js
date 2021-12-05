import input from './3input.js';
const lines = input.split('\n');
let vertical = [];
lines.forEach(line => {
  line.split('').forEach((char, i) => {
    if (!vertical[i]) vertical[i] = [];
    vertical[i].push(char);
  });
});
console.log(vertical);
let eachCount = vertical.map(vert => {
  let count1 = 0;
  let count0 = 0;
  vert.forEach(num => {
    if (num == '0') count0++;
    if (num == '1') count1++;
  });
  return {
    count0, count1
  }
});
console.log(eachCount);
let gamma = '';
eachCount.forEach(({count0,count1}) => {
  if (count1 > count0) return gamma += '1';
  gamma += '0';
});
console.log(gamma);
let otheroneidk = '';
eachCount.forEach(({count0,count1}) => {
  if (count1 < count0) return otheroneidk += '1';
  otheroneidk += '0';
});
console.log(otheroneidk);
gamma = parseInt(gamma, 2);
otheroneidk = parseInt(otheroneidk, 2);
console.log('final result', gamma * otheroneidk);