import { useState } from "react";
import ReactDOM from "react-dom";
import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";
import "bulmaswatch/cyborg/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <TextEditor /> */}
        <CellList />
        {/* <CodeCell /> */}
        {/* <CodeCell /> */}
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
