import React, { Component } from "react";
import ReactDOM from "react-dom";
import EventComponent from "./event/EventComponent";
import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import UserSearch from "./refs/UserSearch";

function App() {
  return (
    <div>
      <UserSearch />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
