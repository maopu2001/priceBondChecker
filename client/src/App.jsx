import { searchResult } from "./controllers/searchResult";
import { resetTable } from "./controllers/resetTable";
import { Tabs, TabPanel, TabsList, Tab } from "@mui/base";

export default function App() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchResult();
    }
  });

  return (
    <>
      <h1>Price Bond Checker</h1>
      <div id="searchDiv">
        <Tabs defaultValue={0}>
          <TabsList id="tabList">
            <Tab value={0}>Text</Tab>
            <Tab value={1}>File</Tab>
          </TabsList>
          <TabPanel value={0}>
            <input
              id="inputBondText"
              placeholder="Input Price Bond Numbers Here"
            />
          </TabPanel>
          <TabPanel value={1}>
            <input id="inputBondFile" type="file" accept="text/plain" />
          </TabPanel>
        </Tabs>

        <button type="submit" id="submitBtn" onClick={searchResult}>
          Submit
        </button>
      </div>
      <div id="resultDiv" hidden={true}>
        <center>
          <div id="resultData"></div>
          <button type="button" id="resetBtn" onClick={resetTable}>
            Reset
          </button>
        </center>
      </div>
    </>
  );
}
