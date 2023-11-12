import React from 'react'

const Note = ({toggleImportance, note}) => {
  return (
      <li  onClick={() => toggleImportance(note.id)}>
              {note.content} <br></br>
              <strong>{note.important ? "important" : "not important"}</strong>
      </li>
  )
}

export default Note
