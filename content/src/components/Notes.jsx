import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";
import Note from "./Note";

const Notes = () => {
  
  const notes = useSelector(({ filter, notes }) => {
    if ( filter === 'ALL' ) {
      return notes
    }
    return filter  === 'IMPORTANT' 
      ? notes.filter(note => note.important)
      : notes.filter(note => !note.important)
  })

  const dispatch = useDispatch()
  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
}
  return (
      <ul>
        {notes.map((note) => {
          return (
            <Note key={note.id} note={note} toggleImportance= {toggleImportance}/>
          );
        })}
      </ul>
  );
};

export default Notes;
