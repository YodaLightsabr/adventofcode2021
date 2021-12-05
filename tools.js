import Stump from 'stump.js';
import fetch from 'node-fetch';
import fs from 'fs';

export const logger = new Stump(['Debug']);
export const day = 5;

export async function input () {
  let cached;
  try {
    cached = fs.readFileSync((day + '').padStart(2, '0') + '/input.txt', 'utf8');
  } catch (err) {}
  if (cached) return cached;
  const raw = await fetch(`https://adventofcode.com/2021/day/${day}/input`, {
    headers: {
      cookie: `session=${process.env.session}`
    }
  });
  const data = await raw.text();
  fs.writeFileSync((day + '').padStart(2, '0') + '/input.txt', data, 'utf8');
  return data;
}