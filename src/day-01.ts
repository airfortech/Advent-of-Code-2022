// https://adventofcode.com/2022/day/1

import { getData } from "./utils/getData";
import { title } from "./utils/title";

// part 1
const part1 = async (data: string) => {
  const calories = data
    .split("\r\n\r\n")
    .map(a => a.split("\r\n").reduce((sum, a) => sum + Number(a), 0));

  return Math.max(...calories);
};

// part 2
const part2 = async (data: string) => {
  return data
    .split("\r\n\r\n")
    .map(a => a.split("\r\n").reduce((sum, a) => sum + Number(a), 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((sum, a) => sum + a, 0);
};

(async () => {
  const data = await getData("input-day-01.txt");

  title("day 1");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
