import { useDispatch } from "react-redux";
import { createNoteAction } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
// import { createNotification, deleteNotification } from "../reducers/notificationReducer";
// import { createNew } from "../services/anecdotes";
const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const createNewNote = async(event) => {
    event.preventDefault();
    const { target } = event;
    const content = target.content.value;
    target.content.value = "";
    // const newAnecdote = await createNew(content)
    // console.log("🚀 ~ file: AnecdoteForm.jsx:14 ~ createNewNote ~ newAnecdote:", newAnecdote)
    dispatch(createNoteAction(content));
    dispatch(setNotification(`you have created ${content}`, 5))
    // dispatch(createNotification(`you create ${content}`))
    // setTimeout(() => {
    //   dispatch(deleteNotification())
    // }, 5000)
  };

  return (
    <form onSubmit={createNewNote}>
      <h2>create new</h2>

      <div>
        <label>
          Content:
          <input name="content" />
        </label>
      </div>
      <button>create</button>
    </form>
  );
};

export default AnecdoteForm;
