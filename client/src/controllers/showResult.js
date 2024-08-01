import { getResultData } from "./apiCall";

export const showResult = async (input) => {
  try {
    // Clearing Previous resultData
    const resultData = document.getElementById("resultData");
    resultData.innerHTML = "";

    // Getting new result
    const result = await getResultData(input);

    //Parsing new resultData
    const temp = document.createElement("html");
    temp.innerHTML = result.data;
    const pdfContainer = temp.querySelector(".pdf-container");

    const SuccessMesssage = pdfContainer
      .querySelector("font")
      .innerHTML.split("<br>");

    for (const message of SuccessMesssage) {
      resultData.innerHTML += `<p>${message}</p>`;
    }

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
    console.log(error.message);
  }
};
