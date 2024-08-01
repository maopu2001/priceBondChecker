import { getResultData } from "./apiCall";

export const showTable = async (input) => {
  try {
    const searchDiv = document.getElementById("searchDiv");
    const resultDiv = document.getElementById("resultDiv");
    searchDiv.setAttribute("hidden", true);
    resultDiv.removeAttribute("hidden");

    const resultData = document.getElementById("resultData");
    // Getting new result and loading results
    let result,
      isLoading = true;
    while (isLoading) {
      resultData.innerHTML = `<img src="loading.gif" width="100" height"100"/>`;
      result = await getResultData(input);
      isLoading = false;
    }
    resultData.innerHTML = "";

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
