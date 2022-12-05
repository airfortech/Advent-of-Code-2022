// https://adventofcode.com/2022/day/5

import { getData } from "./utils/getData";
import { title } from "./utils/title";
import "./utils/Array";

const moveCrates = (
  arr: string[][],
  move: {
    count: number;
    from: number;
    to: number;
  },
  multipick: boolean = false
): void => {
  const crates = arr[move.from - 1].splice(
    arr[move.from - 1].length - move.count
  );
  const cratesToMove = multipick ? crates : crates.reverse();
  arr[move.to - 1] = [...arr[move.to - 1], ...cratesToMove];
};

// part 1
const part1 = async (data: string) => {
  const stacks = data
    .split("\n")
    .slice(0, 8)
    .map(a => a.padEnd(35, " ").match(/.{1,4}/g))
    .rotate()
    .map(a => a.filter(a => a.trim() !== "").reverse());

  const moves = data
    .split("\n")
    .slice(10)
    .map(a => {
      const [count, from, to] = a.match(/.[0-9]+/g).toNumbers();
      return { count, from, to };
    });

  moves.forEach(move => {
    moveCrates(stacks, move);
  });

  return stacks
    .map(a =>
      a
        .reverse()
        .filter((_: string, i: number) => i === 0)
        .map(a => a[1])
    )
    .join("");
};

// part 2
const part2 = async (data: string) => {
  const stacks = data
    .split("\n")
    .slice(0, 8)
    .map(a => a.padEnd(35, " ").match(/.{1,4}/g))
    .rotate()
    .map(a => a.filter(a => a.trim() !== "").reverse());

  const moves = data
    .split("\n")
    .slice(10)
    .map(a => {
      const [count, from, to] = a.match(/.[0-9]+/g).toNumbers();
      return { count, from, to };
    });

  moves.forEach(move => {
    moveCrates(stacks, move, true);
  });

  return stacks
    .map(a =>
      a
        .reverse()
        .filter((_: string, i: number) => i === 0)
        .map(a => a[1])
    )
    .join("");
};

(async () => {
  const data = await getData("input-day-05.txt");

  title("day 5");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
