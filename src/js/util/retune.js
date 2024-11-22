export function retune(char) {
    const pitches = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
  
    let newChar = "";
    let random;
    switch ((random = Math.floor(Math.random() * 5))) {
      case 0: // char becomes char 2 idx back in pitches
        newChar = pitches[pitches.indexOf(char) - 2] + " ";
        break;
      case 1: // char becomes char 1 idx back in pitches
        newChar = pitches[pitches.indexOf(char) - 1] + " ";
        break;
      case 2: // char stays same
        newChar = char + " ";
        break;
      case 3: // char becomes char 1 idx ahead in pitches
        if (char == "B") {
          newChar = "C ";
        } else {
          newChar = pitches[pitches.indexOf(char) + 1] + " ";
        }
        break;
      case 4: // char becomes char 2 idx ahead in pitches
        if (char == "B") {
          newChar = "C# ";
        } else {
          newChar = pitches[pitches.indexOf(char) + 2] + " ";
        }
        break;
    }
    return newChar;
}