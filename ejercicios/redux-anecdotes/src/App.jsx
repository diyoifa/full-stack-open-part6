import { useEffect } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";
// import {setAnecdotes} from "./reducers/anecdoteReducer"
// import { getAll } from "./services/anecdotes";

const App = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    // getAll().then(data => dispatch(setAnecdotes(data)))
    dispatch(initializeAnecdotes())
  },[dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  );
};
export default App;
