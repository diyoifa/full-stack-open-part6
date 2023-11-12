import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";

const App = () => {
  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
