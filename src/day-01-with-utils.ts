// https://adventofcode.com/2022/day/1

import { getData } from "./utils/getData";
import { title } from "./utils/title";
import "./utils/Array";

// part 1
const part1 = async (data: string) => {
  const calories = data.split("\n\n").map(a => a.split("\n").toNumbers().sum());

  return Math.max(...calories);
};

// part 2
const part2 = async (data: string) => {
  return data
    .split("\n\n")
    .map(a => a.split("\n").toNumbers().sum())
    .sortNumbersDescending()
    .slice(0, 3)
    .sum();
};

(async () => {
  const data = await getData("input-day-01.txt");

  title("day 1");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
