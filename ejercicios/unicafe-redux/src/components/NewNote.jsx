import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from '../reducer'

const NewNote = () => {
    const dispatch = useDispatch()

  const addNote = (event) => {
    event.preventDefault();
    const { target } = event;
    const content = target.note.value;
    target.note.value = "";

    dispatch(createNote(content));
  };
  return (
    <form onSubmit={addNote}>
      <h1>Create new Note</h1>
      <label>
        content:
        <input name="note" placeholder="content" />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewNote;
