// https://adventofcode.com/2022/day/4

import { getData } from "./utils/getData";
import { title } from "./utils/title";
import { arrayFromRange } from "./utils/arrayFromRange";
import "./utils/Array";

// part 1
const part1 = async (data: string) => {
  return data
    .split("\r\n")
    .map(section =>
      section
        .split(",")
        .map(a => a.split("-"))
        .map(a => a.toNumbers())
        .map(a => arrayFromRange(a[0], a[1]))
    )
    .map(a => {
      return a[0].match(a[1]) || a[1].match(a[0]);
    })
    .filter(a => a === true).length;
};

// part 2
const part2 = async (data: string) => {
  return data
    .split("\r\n")
    .map(section =>
      section
        .split(",")
        .map(a => a.split("-"))
        .map(a => a.toNumbers())
        .map(a => arrayFromRange(a[0], a[1]))
    )
    .map(a => {
      return a[0].intersection(a[1]).length > 0;
    })
    .filter(a => a === true).length;
};

(async () => {
  const data = await getData("input-day-04.txt");

  title("day 4");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
