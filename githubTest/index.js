import random from "random";
import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const FILE_PATH = "./data.json";
const SOURCE_FILE_PATH = "../src";
const SOURCE_FILE_PATH2 = "../public";
const SOURCE_FILE_PATH3 = "../githubTest";
const SOURCE_FILE_PATH4 = "../index.html";
const SOURCE_FILE_PATH5 = "../package.json";
const SOURCE_FILE_PATH6 = "../package-lock.json";
const SOURCE_FILE_PATH7 = "../yarn.lock";

//april 2

// static method

// const DATE = moment().subtract(34, "d").format();
// const data = {
//   date: DATE,
// };
// jsonfile.writeFile(FILE_PATH, data, () => {
//   simpleGit()
//     .add([FILE_PATH, TEST_FILE_PATH, "./index.js", "./package.json"])
//     .commit(DATE, { "--date": DATE })
//     .push();
// });

// specific grid method method

// const makeCommit = (x, y) => {
//   const DATE = moment()
//     .subtract(1, "y")
//     .add(1, "d")
//     .add(x, "w")
//     .add(y, "d")
//     .format();
//   const data = {
//     date: DATE,
//   };
//   jsonfile.writeFile(FILE_PATH, data, () => {
//     simpleGit()
//       .add([FILE_PATH, TEST_FILE_PATH, "./index.js", "./package.json"])
//       .commit(DATE, { "--date": DATE })
//       .push();
//   });
// };
// //it starts from 0, so the box or grid count is always less than 1
// makeCommit(2, 2);

//Randomize dynamic auto fill box method

export const makeCommit = (n) => {
  console.log("was clicked");
  if (n === 0) return simpleGit().push();
  //days
  //columns
  //starting with 0
  const x = random.int(27, 29);
  //   weeks
  //rows
  const y = random.int(0, 1);
  const DATE = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();
  const data = {
    date: DATE,
  };
  console.log(DATE);
  jsonfile.writeFile(FILE_PATH, data, async () => {
    await simpleGit()
      .add([
        FILE_PATH,
        SOURCE_FILE_PATH,
        SOURCE_FILE_PATH2,
        SOURCE_FILE_PATH3,
        SOURCE_FILE_PATH4,
        SOURCE_FILE_PATH5,
        SOURCE_FILE_PATH6,
        SOURCE_FILE_PATH7,
      ])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n));
  });
};
//it starts from 0, so the box or grid count is always less than 1
makeCommit(10);
