// https://adventofcode.com/2022/day/7

import { getData } from "./utils/getData";
import { title } from "./utils/title";

interface Item {
  type: "dir" | "file";
  name: string;
  dirs?: string[];
  files?: string[];
  size: number;
}

/*

{
  [dirName]: {
    [dirName1]:{
      _files: Set()
    }
    _files: Set()
  }
}

*/

// part 1
const part1 = async (data: string) => {
  let currentDir = "";
  const result = data
    .split("\n")
    .slice(1)
    .slice(0, 18)
    .forEach(line => {
      if (line.startsWith("$ cd ")) {
        currentDir += "." + line.slice(5);
      }
    });

  return currentDir;
};

// part 2
const part2 = async (data: string) => {};

(async () => {
  const data = await getData("input-day-07.txt");

  title("day 7");

  console.log("part 1");
  console.log(await part1(data));

  console.log("\npart 2");
  console.log(await part2(data));
})();
