import { readFile } from "fs/promises";

export const getData = async (file: string) => {
  return await readFile(`./data/${file}`, "utf8");
};
