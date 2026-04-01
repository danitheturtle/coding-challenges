/***
 * De-noised puzzle:
 
    Input includes one report per line.
    Each report is a list of space-delimited numbers called levels

    7 6 4 2 1
    1 2 7 8 9
    9 7 6 2 1
    1 3 2 4 5
    8 6 4 4 1
    1 3 6 7 9

    This example data contains six reports each containing five levels.

    Systems can only tolerate levels that are either gradually increasing or gradually decreasing.
    A report only counts as safe if both of the following are true:
        The levels are either all increasing or all decreasing.
        Any two adjacent levels differ by at least one and at most three.

    In the example above, the reports can be found safe or unsafe by checking those rules:
        7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
        1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
        9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
        1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
        8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
        1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.

    So, in this example, 2 reports are safe.
    Analyze the unusual data from the engineers. How many reports are safe?
 */
import fs from "fs";

const parseInputString = (data) => {
  const linesArray = data.split(/\r?\n/);
  return linesArray.map((levelsString) => {
    return levelsString.split(" ").map((str) => Number(str));
  });
};

const parseFromFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return parseInputString(data);
  } catch (e) {
    console.error(e);
  }
};

const solve = (parsedInput) => {
  return parsedInput.reduce((acc, nextReport) => {
    if (nextReport.length < 2) {
      // early return, not valid
      return acc
    }
    let direction = 0;
    for (let i = 1; i < nextReport.length; i++) {
      const difference = nextReport[i - 1] - nextReport[i];
      if (difference === 0) {
        // early return, unsafe because no increase or decrease
        return acc;
      } else {
        const thisDir = Math.min(1, Math.max(-1, difference));
        if (direction === 0) {
          direction = thisDir;
        } else if (direction !== thisDir) {
          // early return, unsafe because direction changed
          return acc;
        }
        const absDifference = Math.abs(difference);
        if (absDifference > 3) {
          // early return, unsafe because inc or dec > 3
          return acc;
        }
      }
    }
    return acc + 1;
  }, 0);
};

console.dir(solve(parseFromFile("./input_full.txt")));
