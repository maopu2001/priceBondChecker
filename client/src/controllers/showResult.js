import { getResultData } from "./apiCall";

export const showResult = async () => {
  const input = document.getElementById("inputBondText").value;
  try {
    const result = await getResultData(input);

    const temp = document.createElement("html");
    temp.innerHTML = result.data;
    const pdfContainer = temp.querySelector(".pdf-container");

    const resultData = document.getElementById("resultData");
    resultData.innerHTML = pdfContainer.querySelector("font").outerHTML;
    const table = pdfContainer.querySelector("table");

    // deleting Eligible Series' column from the table
    if (table) {
      var row = table.rows;
      for (var i = 0; i < row[0].cells.length; i++) {
        var str = row[0].cells[i].innerHTML;
        if (str.search("Eligible Series") !== -1) {
          for (var j = 0; j < row.length; j++) {
            row[j].deleteCell(i);
          }
        }
      }
      resultData.appendChild(table);
    }
  } catch (error) {
    console.error(error.message);
  }
};
