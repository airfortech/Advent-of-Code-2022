// https://adventofcode.com/2022/day/3

import { getData } from "./utils/getData";
import { title } from "./utils/title";

// part 1
const part1 = async (data: string) => {
  const results = data
    .split("\r\n")
    .map(line => {
      const length = line.length;
      const first = line.slice(0, length / 2);
      const second = line.slice(length / 2);
      let letter: string = null;
      first.split("").every(a => {
        if (second.indexOf(a) > -1) {
          letter = a;
          return false;
        }
        return true;
      });
      const code = letter.charCodeAt(0);
      return code > 90 ? code - 96 : code - 38;
    })
    .reduce((sum, a) => sum + a, 0);

  return results;
};

// part 2
const part2 = async (data: string) => {
  const strings = data.split("\r\n");

  const arr: string[][] = [];

  for (let i = 0; i < strings.length; i++) {
    if (!arr[Math.floor(i / 3)]) arr[Math.floor(i / 3)] = [];
    arr[Math.floor(i / 3)].push(strings[i]);
  }

  return arr
    .map(set => {
      let letter: string = null;
      set[0].split("").every(a => {
        if (set[1].indexOf(a) > -1 && set[2].indexOf(a) > -1) {
          letter = a;
          return false;
        }
        return true;
      });
      const code = letter.charCodeAt(0);
      return code > 90 ? code - 96 : code - 38;
    })
    .reduce((sum, a) => sum + a, 0);
};

(async () => {
  const data = await getData("input-day-03.txt");

  title("day 3");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
