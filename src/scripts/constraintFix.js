import { retune } from "./utils.js";

function constraintNoMoreThanX(string) {
  let random = Math.floor(Math.random() * 5 + 1);
  if (random > 1) {
    string = `no more than ${random} tracks`;
  } else {
    string = `no more than 1 track`;
  }
  return string;
}

function constraintRandomTuning(string) {
  let standard = "EADGBE";
  let randomTuning = "";

  for (let char of standard) {
    let newPitch = retune(char);
    randomTuning += newPitch;
  }
  string = `random tuning - ${randomTuning}`.slice(0, -1);

  return string;
}

function constraintIgnoreXStrings(string) {
  let random;
  switch ((random = Math.floor(Math.random() * 3))) {
    case 0:
      string = "ignore 1 string (your choice)";
      break;
    case 1:
      string = "ignore 2 strings (your choice)";
      break;
    case 2:
      string = "ignore 3 strings (your choice)";
      break;
  }
  return string;
}

export function constraintFix(string) {
  // calls all 3 ?constraint setter functions
  if (string == "?nomorethanx") {
    string = constraintNoMoreThanX(string);
  } else if (string == "?randomtuning") {
    string = constraintRandomTuning(string);
  } else if (string == "?ignoreXstrings") {
    string = constraintIgnoreXStrings(string);
  }
  return string;
}
