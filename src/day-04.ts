// https://adventofcode.com/2022/day/4

import { getData } from "./utils/getData";
import { title } from "./utils/title";
import "./utils/Array";

// part 1
const part1 = async (data: string) => {
  return data
    .split("\n")
    .map(section =>
      section
        .split(",")
        .map(a => a.split("-"))
        .map(a => a.toNumbers())
        .map(a => new Array(a[1] - a[0] + 1).fill(1).map((_, i) => a[0] + i))
    )
    .map(a => {
      return (
        a[0].every(b => a[1].includes(b)) || a[1].every(b => a[0].includes(b))
      );
    })
    .filter(a => a === true).length;
};

// part 2
const part2 = async (data: string) => {
  return data
    .split("\n")
    .map(section =>
      section
        .split(",")
        .map(a => a.split("-"))
        .map(a => a.toNumbers())
        .map(a => [
          ...Array(a[1] - a[0] + 1)
            .fill(1)
            .map((_, i) => a[0] + i),
        ])
    )
    .map(a => {
      return (
        a[0].some(b => a[1].includes(b)) || a[1].some(b => a[0].includes(b))
      );
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
