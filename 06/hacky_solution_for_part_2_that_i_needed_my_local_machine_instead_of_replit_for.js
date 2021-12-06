
function main (input) {
  let days = 256;
  let lanternfish = input.split(',').map(Number);
  let fishOf0 = 0;
  let fishOf1 = 0;
  let fishOf2 = 0;
  let fishOf3 = 0;
  let fishOf4 = 0;
  let fishOf5 = 0;
  let fishOf6 = 0;
  let fishOf7 = 0;
  let fishOf8 = 0;
  function totalFish () {
      return fishOf0 + fishOf1 + fishOf2 + fishOf3 + fishOf4 + fishOf5 + fishOf6 + fishOf7 + fishOf8;
  }
  lanternfish.forEach(fish => {
      if (fish == 0) fishOf0++;
      if (fish == 1) fishOf1++;
      if (fish == 2) fishOf2++;
      if (fish == 3) fishOf3++;
      if (fish == 4) fishOf4++;
      if (fish == 5) fishOf5++;
      if (fish == 6) fishOf6++;
      if (fish == 7) fishOf7++;
      if (fish == 8) fishOf8++;
  });
  for (let i = 0; i < days; i++) {
    let newFishOf8 = fishOf0;
    let newFishOf6 = fishOf0;
    fishOf0 = fishOf1;
    fishOf1 = fishOf2;
    fishOf2 = fishOf3;
    fishOf3 = fishOf4;
    fishOf4 = fishOf5;
    fishOf5 = fishOf6;
    fishOf6 = fishOf7 + newFishOf6;
    fishOf7 = fishOf8;
    fishOf8 = newFishOf8;
    console.log('day', i)
  }
  return totalFish();
}
console.log(
main(`1,1,1,1,2,1,1,4,1,4,3,1,1,1,1,1,1,1,1,4,1,3,1,1,1,5,1,3,1,4,1,2,1,1,5,1,1,1,1,1,1,1,1,1,1,3,4,1,5,1,1,1,1,1,1,1,1,1,3,1,4,1,1,1,1,3,5,1,1,2,1,1,1,1,4,4,1,1,1,4,1,1,4,2,4,4,5,1,1,1,1,2,3,1,1,4,1,5,1,1,1,3,1,1,1,1,5,5,1,2,2,2,2,1,1,2,1,1,1,1,1,3,1,1,1,2,3,1,5,1,1,1,2,2,1,1,1,1,1,3,2,1,1,1,4,3,1,1,4,1,5,4,1,4,1,1,1,1,1,1,1,1,1,1,2,2,4,5,1,1,1,1,5,4,1,3,1,1,1,1,4,3,3,3,1,2,3,1,1,1,1,1,1,1,1,2,1,1,1,5,1,3,1,4,3,1,3,1,5,1,1,1,1,3,1,5,1,2,4,1,1,4,1,4,4,2,1,2,1,3,3,1,4,4,1,1,3,4,1,1,1,2,5,2,5,1,1,1,4,1,1,1,1,1,1,3,1,5,1,2,1,1,1,1,1,4,4,1,1,1,5,1,1,5,1,2,1,5,1,1,1,1,1,1,1,1,1,1,1,1,3,2,4,1,1,2,1,1,3,2`)
)