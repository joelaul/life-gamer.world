// IMPORTS

import { params, bgSrc, sounds } from "./constants.js";
import { constraintFix, format, pick, randomStrip } from "./util/index.js";

// DOM

const body = document.querySelector("body");
const p = document.querySelector("p");
const h1 = document.querySelector("h1");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const labels = document.querySelectorAll("label");
const generateBtn = document.querySelector(".button-generate");
const changeBGBtn = document.querySelector(".button-change_bg");
const maxTempoRange = document.querySelectorAll("input")[8];
const maxTempoLabel = document.querySelectorAll("label")[8];
const constraintsRange = document.querySelectorAll("input")[9];
const constraintsLabel = document.querySelectorAll("label")[9];

// STATE

let bgIdx = 0;
let numConstraints = 2;
let maxTempo = 240;
let state = [];

// FUNCTIONS - EFFECT

const clickSound = () => {
  let random = sounds[Math.floor(Math.random() * sounds.length)];
  let sound = new Audio(random);
  sound.pause();
  sound.play();
}

// FUNCTIONS - STATE

const setState = () => {
  setGenresOrStyle();

  if (checkboxes[0].checked) {
    setTempo();
  }

  // checkboxes 1-4 (philosophy, mode, timeSig, vibe)
  setOthers();

  if (checkboxes[5].checked) {
    setConstraints();
  }
  if (checkboxes[6].checked) {
    setTimeLimit();
  }
  if (checkboxes[7].checked) {
    randomStrip(state);
  }

  let output = format(state);
  p.innerText = output;
}

const setGenresOrStyle = () => {
  let random = Math.random();
  if (random < 0.5) {
    setGenres();
  } else {
    setStyle();
  }
}

const setGenres = () => {
  let primaryGenre = pick(params.genres);
  let primaryPick = pick(primaryGenre);
  let secondaryGenre = pick(params.genres);
  let same = secondaryGenre == primaryGenre;
  while (same) {
    secondaryGenre = pick(params.genres);
    same = secondaryGenre == primaryGenre;
  }
  let secondaryPick = pick(secondaryGenre);

  state.push(
    `· primary genre: ${primaryPick}\n· with elements of: ${secondaryPick}`
  );
}

const setStyle = () => {
  let style = pick(params.styleOfs);
  state.push(`· style of: ${style}`);
}

const setTempo = () => {
  let tempo = Math.floor(Math.random() * (maxTempo - 59)) + 60;
  state.push("· tempo: " + tempo + " BPM");
}

const setOthers = () => {
  const { philosophies, modes, timeSigs, vibes, constraints } = params;

  let others = [philosophies, modes, timeSigs, vibes, constraints];
  let othersPrefixes = [
    "· philosophy: ",
    "· mode: ",
    "· time sig: ",
    "· vibe: ",
    "",
  ];
  let othersCheckboxes = [...checkboxes].slice(1, 6);

  for (let i = 0; i < othersCheckboxes.length; i++) {
    if (othersCheckboxes[i].checked) {
      state.push(othersPrefixes[i] + pick(others[i]));
    }
  }
}

const setConstraints = () => {
  const { constraints } = params;
  let usedConstraints = [];
  let firstConstraint = state[state.length - 1];
  usedConstraints.push(firstConstraint);

  for (let i = 0; i < numConstraints - 1; i++) {
    let extraConstraint = pick(constraints);
    let same = usedConstraints.includes(extraConstraint);
    while (same) {
      extraConstraint = pick(constraints);
      same = usedConstraints.includes(extraConstraint);
    } // re-rolls until extra constraint is new
    usedConstraints.push(extraConstraint);
  }

  usedConstraints = usedConstraints.map((x) => constraintFix(x));
  state[state.length - 1] = "· constraints: " + usedConstraints.join("; ");
}

const setTimeLimit = () => {
  let timeLimit = 30 + 15 * Math.floor(Math.random() * 11);
  state.push("· time limit: " + timeLimit + " minutes");
}

// HANDLERS

const handleGenerate = () => {
  if (p.classList.contains('hide')) {
    p.classList.remove('hide');
  }
  clickSound();
  setState();
  state = [];
}

const handleChangeBG = () => {

  // dark-text for indices 1, 2, 4, 5, 6, 7

  bgIdx = (bgIdx + 1) % bgSrc.length;
  body.style.backgroundImage = bgSrc[bgIdx];

  if ([1, 2, 4, 5, 6, 7].includes(bgIdx)) {
    document.body.classList.add('dark-mode');
    sessionStorage.setItem('dark-mode', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    sessionStorage.setItem('dark-mode', 'false');
  }

  sessionStorage.setItem('background', body.style.backgroundImage)
  sessionStorage.setItem('bgIdx', bgIdx)
}

// INIT

const init = () => {
  maxTempoRange.addEventListener("input", (e) => {
    maxTempoLabel.innerText = "Max Tempo: " + e.target.value;
    maxTempo = e.target.value;
  });
  constraintsRange.addEventListener("input", (e) => {
    constraintsLabel.innerText = "Constraints: " + e.target.value;
    numConstraints = e.target.value;
  });
  generateBtn.addEventListener("click", handleGenerate);
  changeBGBtn.addEventListener("click", handleChangeBG);

  if (sessionStorage['bgIdx']) {
    bgIdx = sessionStorage.getItem('bgIdx');
  }
};

init();