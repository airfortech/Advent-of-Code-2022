// https://adventofcode.com/2022/day/3

import { getData } from "./utils/getData";
import { title } from "./utils/title";
import "./utils/Array";

// part 1
const part1 = async (data: string) => {
  return data
    .split("\r\n")
    .map(line => {
      const length = line.length;
      const first = line.slice(0, length / 2);
      const second = line.slice(length / 2);
      const code = first
        .split("")
        .intersection(second.split(""))[0]
        .charCodeAt(0);
      return code > 90 ? code - 96 : code - 38;
    })
    .sum();
};

// part 2
const part2 = async (data: string) => {
  return data
    .split("\r\n")
    .splitEveryNth(3)
    .map(set => {
      const code = set[0]
        .split("")
        .intersection(set[1].split(""))
        .intersection(set[2].split(""))[0]
        .charCodeAt(0);
      return code > 90 ? code - 96 : code - 38;
    })
    .sum();
};

(async () => {
  const data = await getData("input-day-03.txt");

  title("day 3");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
