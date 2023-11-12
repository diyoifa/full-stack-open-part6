import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from '../reducers/noteReducer'
import noteService from '../services/notes'

const NewNote = () => {
    const dispatch = useDispatch()

  const addNote = async(event) => {
    event.preventDefault();
    const { target } = event;
    const content = target.note.value;
    target.note.value = "";

    // const newNote = await noteService.createNew(content)
    dispatch(createNote(content))
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
