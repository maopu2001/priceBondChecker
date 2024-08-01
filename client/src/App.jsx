import { searchResult } from "./controllers/searchResult";
import { Button, Input, Tabs, TabPanel, TabsList, Tab } from "@mui/base";

export default function App() {
  return (
    <>
      <h1>Price Bond Checker</h1>
      <Tabs defaultValue={0}>
        <TabsList id="tabList">
          <Tab value={0}>Text</Tab>
          <Tab value={1}>File</Tab>
        </TabsList>
        <TabPanel value={0}>
          <Input
            id="inputBondText"
            placeholder="Input Price Bond Numbers Here"
          />
        </TabPanel>
        <TabPanel value={1}>
          <Input id="inputBondFile" type="file" />
        </TabPanel>
      </Tabs>

      <Button type="button" id="submitBtn" onClick={searchResult}>
        Submit
      </Button>
      <div id="resultData"></div>
    </>
  );
}
