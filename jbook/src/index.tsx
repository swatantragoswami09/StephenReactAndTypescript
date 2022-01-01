import { useState } from "react";
import ReactDOM from "react-dom";
import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";
import "bulmaswatch/cyborg/bulmaswatch.min.css";

const App = () => {
  return (
    <div>
      <TextEditor />
      {/* <CodeCell /> */}
      {/* <CodeCell /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
