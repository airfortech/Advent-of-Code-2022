// https://adventofcode.com/2022/day/8

import { getData } from "./utils/getData";
import { title } from "./utils/title";

// part 1
const part1 = async (data: string) => {
  let counter = 0;
  data.split("\n").forEach((line, y, arr) => {
    line
      .split("")
      .map(a => Number(a))
      .forEach((num, x, arrRow) => {
        if (Math.max(-1, ...arrRow.slice(0, x)) < num) {
          counter++;
        } else if (Math.max(-1, ...arrRow.slice(x + 1)) < num) {
          counter++;
        } else if (
          Math.max(-1, ...arr.map(a => Number(a[x])).slice(0, y)) < num
        ) {
          counter++;
        } else if (
          Math.max(-1, ...arr.map(a => Number(a[x])).slice(y + 1)) < num
        ) {
          counter++;
        }
      });
  });

  return counter;
};

// part 2
const part2 = async (data: string) => {
  const calculateDistance = (arr: number[], num: number): number => {
    return arr.length === 0
      ? 0
      : arr.findIndex(a => a >= num) > -1
      ? arr.findIndex(a => a >= num) + 1
      : arr.length;
  };

  const distances: number[] = [];

  data.split("\n").forEach((line, y, arr) => {
    line
      .split("")
      .map(a => Number(a))
      .forEach((num, x, arrRow) => {
        const leftDistance = calculateDistance(
          arrRow.slice(0, x).reverse(),
          num
        );
        const rightDistance = calculateDistance(arrRow.slice(x + 1), num);
        const topDistance = calculateDistance(
          arr
            .map(a => Number(a[x]))
            .slice(0, y)
            .reverse(),
          num
        );
        const bottomDistance = calculateDistance(
          arr.map(a => Number(a[x])).slice(y + 1),
          num
        );

        distances.push(
          leftDistance * rightDistance * topDistance * bottomDistance
        );
      });
  });

  return Math.max(...distances);
};

(async () => {
  const data = await getData("input-day-08.txt");

  title("day 8");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
