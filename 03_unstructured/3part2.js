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
(() => {
let mosts = '';
let activenums = lines;
let eachCount = vertical.map((vert, i) => {
  let count1 = 0;
  let count0 = 0;
  vert.forEach(num => {
    if (num == '0') count0++;
    if (num == '1') count1++;
  });
  let most;
  if (count1 >= count0) most = '1';
  else most = '0';
  mosts += (most)
  console.log({count1,count0,most})
  activenums.forEach((active, inde) => {
    if (active[i] !== most) activenums.splice(activenums.indexOf(active), 1);
  })
});
console.log(activenums);
console.log(parseInt(mosts, 2));
})();
(() => {
let mosts = '';
let activenums = lines;
let eachCount = vertical.map(vert => {
  let count1 = 0;
  let count0 = 0;
  vert.forEach(num => {
    if (num == '0') count0++;
    if (num == '1') count1++;
  });
  let least;
  if (count1 < count0) least = '1';
  else least = '0';
  mosts += (least)
  console.log({count1,count0,least})
  vert.forEach((num, i) => {
    if (activenums.length == 1) return;
    if (num !== least) {
     // console.log(`num ${num} is not most ${most}`)
      activenums.splice(i, 1);
    }
  })
});
console.log(parseInt(mosts, 2));
console.log(activenums);
})();

