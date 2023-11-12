import React from 'react'

const Note = ({toggleImportance, note}) => {
  return (
      <li key={note.id} onClick={() => toggleImportance(note.id)}>
              {note.content} <br></br>
              <strong>{note.important ? "important" : "not important"}</strong>
      </li>
  )
}

export default Note
