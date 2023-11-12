import { createSlice } from '@reduxjs/toolkit'
import noteServices from "../services/anecdotes";


const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState: [],
  reducers:{
    // createNoteAction(state, action){
    //   return state.concat(action.payload)
    // },
    voteAnecdoteAction(state, action){
      return state.map(anecdote => {
        if (anecdote.id === action.payload.id) {
          return action.payload
        } else {
          return anecdote
        }
      })
    },
    setAnecdotes(state, action){
      return action.payload
    },
    appendAnecdote(state, action){
      return state.concat(action.payload)
    }
  }
})

export default anecdoteSlice.reducer
export const {voteAnecdoteAction, setAnecdotes, appendAnecdote} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await noteServices.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNoteAction = (content) => {
  return async dispatch => {
    const newAnecdote = await noteServices.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const anecdotes = await noteServices.getAll()
    const anecdoteToVote = anecdotes.find(anecdote=>anecdote.id === id)
    const changedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes+1}
    const updatedAnecdote = await noteServices.update(id, changedAnecdote)
    dispatch(voteAnecdoteAction(updatedAnecdote))
  }
}