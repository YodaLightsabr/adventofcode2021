import fs from 'fs';
export async function main (input) {
  let days = 256;
  let lanternfish = input.split(',').map(Number);
  for (let i = 0; i < days; i++) {
    lanternfish.forEach((fish, index) => {
      if (fish > 0) return lanternfish[index] = fish - 1;
      if (fish == 0) {
        lanternfish.push(8);
        lanternfish[index] = 6;
      }
    });
  }
  return lanternfish.length;
}