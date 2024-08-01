import { Component } from "react";
import { showResult } from "./controllers/showResult";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Price Bond Checker</h1>
        <form className="dataForm">
          <textarea
            id="inputBondText"
            placeholder="Input Price Bond Numbers Here"
          ></textarea>
          <button type="button" id="submitBtn" onClick={showResult}>
            Submit
          </button>
        </form>

        <div id="resultData"></div>
      </div>
    );
  }
}

export default App;
