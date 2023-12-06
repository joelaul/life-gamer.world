// IMPORTS

import { params, images, sounds } from "./constants.js";
import { pick, format, randomize } from "./utils.js";
import { constraintFix } from "./constraintFix.js";

// DOM

const body = document.querySelector("body");
const p = document.querySelector("p");
const h1 = document.querySelector("h1");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const labels = document.querySelectorAll("label");
const generateBtn = document.querySelector("#btn");
const maxTempoRange = document.querySelectorAll("input")[8];
const maxTempoLabel = document.querySelectorAll("label")[8];
const constraintsRange = document.querySelectorAll("input")[9];
const constraintsLabel = document.querySelectorAll("label")[9];
const changeBGBtn = document.querySelector("#btn2");

// STATE

let bgIdx = 0;
let numConstraints = 2;
let maxTempo = 240;
let state = [];

// FUNCTIONS - EFFECT

function clickSound() {
  let random = sounds[Math.floor(Math.random() * sounds.length)];
  let sound = new Audio(random);
  sound.pause();
  sound.play();
}

// FUNCTIONS - STATE

function setState() {
  if (checkboxes[7].checked) {
    randomize(state);
  }

  genreOrStyle();
  setOthers();

  let output = format(state);
  p.innerText = output;
}

function genreOrStyle() {
  let random = Math.random();
  if (random < 0.5) {
    setGenres();
  } else {
    let style = pick(params.styleOfs);
    state.push(`· style of: ${style}`);
  }
}

function setGenres() {
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

function setTempo() {
  // 80 - maxTempo
  let tempo = Math.floor(Math.random() * (maxTempo - 79)) + 80;
  state.push("· tempo: " + tempo + " BPM");
}

function setTimeLimit() {
  // random 30-180 15 min increments
  let timeLimit = 30 + 15 * Math.floor(Math.random() * 11);
  state.push("· time limit: " + timeLimit + " minutes");
}

function setOthers() {
  // add first constraint and all extra constraints to one array usedConstraints, then join by semicolons and update
  const { philosophies, modes, timeSigs, vibes, constraints } = params;

  let others = [philosophies, modes, timeSigs, vibes, constraints];

  let othersTypes = [
    "· philosophy: ",
    "· mode: ",
    "· time sig: ",
    "· vibe: ",
    "",
  ];

  let checkboxesOthers = [...checkboxes].slice(1, 6);

  if (checkboxes[0].checked) {
    setTempo();
  }

  for (let i = 0; i < checkboxesOthers.length; i++) {
    if (checkboxesOthers[i].checked) {
      state.push(othersTypes[i] + pick(others[i]));
    }
  }

  if (checkboxes[5].checked) {
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

  if (checkboxes[6].checked) {
    setTimeLimit();
  }
}

// HANDLERS

function handleGenerate() {
  clickSound();
  setState();
  state = [];
}

function handleChangeBG() {
  body.style.backgroundImage = images[bgIdx];

  if (![0, 1, 3, 4, 5, 6].includes(bgIdx)) {
    p.style.color = "whitesmoke";
    h1.style.color = "whitesmoke";
    for (let label of labels) {
      label.style.color = "whitesmoke";
    }
    body.style.borderLeft = "1px solid whitesmoke";
    body.style.borderRight = "1px solid whitesmoke";
  } else {
    p.style.color = "black";
    h1.style.color = "black";
    for (let label of labels) {
      label.style.color = "black";
    }
    body.style.borderLeft = "2px solid black";
    body.style.borderRight = "2px solid black";
  }

  bgIdx = (bgIdx + 1) % images.length;
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
};

init();
