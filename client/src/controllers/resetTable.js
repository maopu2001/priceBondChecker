export const resetTable = () => {
  const searchDiv = document.getElementById("searchDiv");
  searchDiv.removeAttribute("hidden");
  const resultDiv = document.getElementById("resultDiv");
  resultDiv.setAttribute("hidden", true);
  const resultData = document.getElementById("resultData");
  resultData.innerHTML = "";
  const inputBondText = document.getElementById("inputBondText");
  inputBondText.value = "";
};
