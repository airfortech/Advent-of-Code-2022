// https://adventofcode.com/2022/day/5

import { getData } from "./utils/getData";
import { title } from "./utils/title";
import { arrayFromRange } from "./utils/arrayFromRange";
import "./utils/Array";

// part 1
const part1 = async (data: string) => {};

// part 2
const part2 = async (data: string) => {};

(async () => {
  const data = await getData("input-day-05.txt");

  title("day 5");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
