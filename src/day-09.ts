// https://adventofcode.com/2022/day/9

import { getData } from "./utils/getData";
import { title } from "./utils/title";
import "./utils/Array";

const getDistance = (snake: {
  headX: number;
  headY: number;
  tailX: number;
  tailY: number;
}) => {
  return Math.floor(
    Math.sqrt(
      Math.pow(Math.abs(snake.headX - snake.tailX), 2) +
        Math.pow(Math.abs(snake.headY - snake.tailY), 2)
    )
  );
};

const move = (
  array: string[][],
  direction: "U" | "D" | "L" | "R",
  snake: {
    headX: number;
    headY: number;
    tailX: number;
    tailY: number;
  }
): string[][] => {
  let arr = array;
  const maxX = arr[0].length - 1;
  const maxY = arr.length - 1;
  let lastHeadX = snake.headX;
  let lastHeadY = snake.headY;

  if (direction.includes("L")) {
    if (snake.headX === 0) {
      arr = arr.extend2dArray("left", "*");
      lastHeadX = 1;
      snake.tailX += 1;
    } else {
      snake.headX -= 1;
    }
  }
  if (direction.includes("R")) {
    if (snake.headX === maxX) arr = arr.extend2dArray("right", "*");
    snake.headX += 1;
  }
  if (direction.includes("U")) {
    if (snake.headY === 0) {
      arr = arr.extend2dArray("top", "*");
      lastHeadY = 1;
      snake.tailY += 1;
    } else snake.headY -= 1;
  }
  if (direction.includes("D")) {
    if (snake.headY === maxY) arr = arr.extend2dArray("bottom", "*");
    snake.headY += 1;
  }

  if (getDistance(snake) > 1) {
    snake.tailX = lastHeadX;
    snake.tailY = lastHeadY;
  }

  arr[snake.tailY][snake.tailX] = "T";
  return arr;
};

// part 1
const part1 = async (data: string) => {
  const snake: {
    headX: number;
    headY: number;
    tailX: number;
    tailY: number;
  } = {
    headX: 0,
    headY: 0,
    tailX: 0,
    tailY: 0,
  };
  let arr = [["T"]];

  data
    .split("\n")
    .map(a => new Array(Number(a.split(" ")[1])).fill(a.split(" ")[0]))
    .flat()
    .forEach(a => (arr = move(arr, a, snake)));

  return arr.flat().filter(a => a === "T").length;
};

// part 2
const part2 = async (data: string) => {};

(async () => {
  const data = await getData("input-day-09.txt");

  title("day 9");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
