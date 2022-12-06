// https://adventofcode.com/2022/day/6

import { getData } from "./utils/getData";
import { title } from "./utils/title";
import "./utils/Array";

const findMarker = (string: string, length: number): number => {
  for (let i = 0; i < string.length; i++) {
    const word = string.slice(i, i + length);
    const set = new Set([...word.split("")]);
    if (set.size === length) return i + length;
  }
};

// part 1
const part1 = async (data: string) => {
  return findMarker(data, 4);
};

// part 2
const part2 = async (data: string) => {
  return findMarker(data, 14);
};

(async () => {
  const data = await getData("input-day-06.txt");

  title("day 6");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
