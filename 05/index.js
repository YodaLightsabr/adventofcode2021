import fs from 'fs';
export async function main (input) {
  let maxWidth = 0;
  let maxHeight = 0;
  let points = [];
  let diagonalPoints = [];
  const lines = input.split('\n').map(line => {
    let pairs = line.split(' -> ');
    pairs = pairs.map(pair => {
      let numbers = pair.split(',');
      if (+numbers[0] > maxWidth) maxWidth = +numbers[0];
      if (+numbers[1] > maxHeight) maxHeight = +numbers[1];
      return [+numbers[0], +numbers[1]];
    });
    let straight = false;
    if (isNaN(pairs[0][1])) return;
    if (pairs[0][0] == pairs[1][0] || pairs[0][1] == pairs[1][1]) straight = true;
    if (straight) {
      if (pairs[0][0] == pairs[1][0]) {
        let start = pairs[0][1];
        let end = pairs[1][1];
        let x = pairs[0][0];
        for (let i = 0; i < Math.abs(start - end) + 1; i++) {
          if (start > end) points.push([x, start - i]);
          else points.push([x, start + i]);
        }
      } else {
        let start = pairs[0][0];
        let end = pairs[1][0];
        let y = pairs[0][1];
        for (let i = 0; i < Math.abs(start - end) + 1; i++) {
          if (start > end) points.push([start - i, y]);
          else points.push([start + i, y]);
        }
      }
    } else {
      if (Math.abs(pairs[0][0] - pairs[1][1]) == Math.abs(pairs[0][1] - pairs[1][0])) {

        let startx = pairs[0][0];
        let endx = pairs[1][0];
        let starty = pairs[0][1];
        let endy = pairs[1][1];
        for (let i = 0; i < Math.abs(startx - endx) + 1; i++) {
          if (startx > endx) {
            if (starty > endy) {
              diagonalPoints.push([startx - i, starty - i]);
            } else {
              diagonalPoints.push([startx - i, starty + i]);
            }
          } else {
            if (starty > endy) {
              diagonalPoints.push([startx + i, starty - i]);
            } else {
              diagonalPoints.push([startx + i, starty + i]);
            }
          }
        }
      
      } else {
        if (Math.abs(pairs[0][0] - pairs[1][0]) == Math.abs(pairs[0][1] - pairs[1][1])) {

        let startx = pairs[0][0];
        let endx = pairs[1][0];
        let starty = pairs[0][1];
        let endy = pairs[1][1];
        for (let i = 0; i < Math.abs(startx - endx) + 1; i++) {
          if (startx > endx) {
            if (starty > endy) {
              diagonalPoints.push([startx - i, starty - i]);
            } else {
              diagonalPoints.push([startx - i, starty + i]);
            }
          } else {
            if (starty > endy) {
              diagonalPoints.push([startx + i, starty - i]);
            } else {
              diagonalPoints.push([startx + i, starty + i]);
            }
          }
        }
      
        } else {
        }
      }
    }
  });
  let canvas = ' '.repeat(maxHeight + 1).split('').map(a => '0'.repeat(maxWidth + 1).split('').map(a => 0));
  for (let i = 0; i < points.length; i++) {
    let [x, y] = points[i];
    canvas[y][x] += 1;
  }
  let diagonalCanvas = JSON.parse(JSON.stringify(canvas));
  for (let i = 0; i < diagonalPoints.length; i++) {
    let [x, y] = diagonalPoints[i];
    diagonalCanvas[y][x] += 1;
  }
  fs.writeFileSync('map.txt', canvas.map(a => a.join('')).join('\n').split('0').join('.'), 'utf8')
  let total = 0;
  canvas.forEach(a => {
    total += a.filter(a => a >= 2).length
  });
  let diagonalTotal = 0;
  diagonalCanvas.forEach(a => {
    diagonalTotal += a.filter(a => a >= 2).length
  });
  return [total, diagonalTotal];
}