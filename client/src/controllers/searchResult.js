import { showResult } from "./showResult.js";

export const searchResult = () => {
  const inputText = document.getElementById("inputBondText");
  const inputFile = document.getElementById("inputBondFile");

  let input;

  if (inputFile && inputFile.files.length > 0) {
    const file = inputFile.files[0];

    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = e.target.result;
      input = text;
      console.log(input);
      showResult(input);
    };

    reader.onerror = (error) => {
      alert("Error reading file:", error);
      return;
    };

    reader.readAsText(file);
  } else if (inputText && inputText.value) {
    input = inputText.value;
    console.log(input);
    showResult(input);
  } else {
    alert("No input found");
    return;
  }
};
