import { showTable } from "./showTable.js";

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
      showTable(input);
      return;
    };

    reader.onerror = (error) => {
      alert("Error reading file:", error);
      return;
    };

    reader.readAsText(file);
  } else if (inputText && inputText.value) {
    input = inputText.value;
    showTable(input);
    return;
  } else {
    alert("No input found");
    return;
  }
};
