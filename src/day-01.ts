// https://adventofcode.com/2022/day/1

import { getData } from "./utils/getData";

// part 1
const part1 = async () => {
  console.log("part 1");

  const data = await getData("input-day-01.txt");
  const calories = data
    .split("\r\n\r\n")
    .map(a => a.split("\r\n").reduce((sum, a) => sum + Number(a), 0));

  console.log(Math.max(...calories));
};

// part 2
const part2 = async () => {
  console.log("part 2");

  const data = await getData("input-day-01.txt");
  const calories = data
    .split("\r\n\r\n")
    .map(a => a.split("\r\n").reduce((sum, a) => sum + Number(a), 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((sum, a) => sum + a, 0);

  console.log(calories);
};

(async () => {
  await part1();
  console.log("");
  await part2();
})();
