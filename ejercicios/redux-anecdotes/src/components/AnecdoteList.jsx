import { useSelector, useDispatch } from "react-redux";
// import { voteAnecdoteAction } from "../reducers/anecdoteReducer";
import { voteAnecdote } from "../reducers/anecdoteReducer";
// import {createNotification, deleteNotification} from '../reducers/notificationReducer'
import { setNotification } from "../reducers/notificationReducer";
import Anecdote from "./Anecdote";


const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filter}) => {
    if(filter === " "){
      return anecdotes
    }else{
      return anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
    }
  });
  const allAnecdotes = useSelector(state => state.anecdotes)
  // console.log("🚀 ~ file: AnecdoteList.jsx:16 ~ anecdotes ~ anecdotes:", anecdotes)
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnecdote(id));
    const anecdote = allAnecdotes.filter( anecdote => anecdote.id === id)
    console.log(anecdote[0].content)
    // dispatch(createNotification(`you voted ${anecdote[0].content}`))
    // setTimeout(() => {
    //   dispatch(deleteNotification())
    // }, 5000)
    dispatch(setNotification(`you voted ${anecdote[0].content}`, 5))
  };

  return (
    <div>
      {[...anecdotes]
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote vote={vote} anecdote={anecdote} key={anecdote.id}/>
        ))}
    </div>
  );
};

export default AnecdoteList;
