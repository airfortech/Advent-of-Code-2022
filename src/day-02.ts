// https://adventofcode.com/2022/day/2

import { getData } from "./utils/getData";
import { title } from "./utils/title";

// part 1
const part1 = async (data: string) => {
  const options: { [key: string]: number } = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6,
  };

  return data
    .split("\r\n")
    .map(a => options[a])
    .reduce((sum, a: number) => sum + a, 0);
};

// part 2
const part2 = async (data: string) => {
  const options: { [key: string]: number } = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7,
  };

  return data
    .split("\r\n")
    .map(a => options[a])
    .reduce((sum, a: number) => sum + a, 0);
};

(async () => {
  const data = await getData("input-day-02.txt");

  title("day 2");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
