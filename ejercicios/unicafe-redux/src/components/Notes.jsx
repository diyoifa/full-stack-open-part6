import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../reducer";
import Note from "./Note";

const Notes = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  const toggleImportance = (id) => {
    dispatch(toggle(id))
}
  return (
      <ul>
        {state?.map((note) => {
          return (
            <Note note={note} toggleImportance= {toggleImportance}/>
          );
        })}
      </ul>
  );
};

export default Notes;
