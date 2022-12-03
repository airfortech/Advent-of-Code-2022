export const title = async (title: string) => {
  console.log(`/////////  Advent of Code 2022  /////////`);
  console.log(
    `/////////         ${title}${
      title.length > 5 ? "" : " "
    }        /////////\n`
  );
};
