import React from "react";
import ReactDOM from "react-dom";
import { css } from "@emotion/core";

const containerStyle = css`
  background: red;
`;

const App = () => (
  <div css={containerStyle}>
    <h1>Hello world!</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
