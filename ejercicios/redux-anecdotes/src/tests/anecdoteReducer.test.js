/* eslint-disable no-undef */
import { voteAnecdoteAction, createNoteAction } from "../reducers/anecdoteReducer";
import reducer from "../reducers/anecdoteReducer";

describe('actions reducer', () => {
    const state = [
        {
            content: "note 1",
            id: 1,
            votes: 0
        },
        {
            content: "note 2",
            id: 2,
            votes: 0
        }
    ]

    test('a note can be voted', () => {
        const { id } = state[0] //first note id
        const newState = reducer(state, voteAnecdoteAction(id))
        expect(newState).toHaveLength(state.length)
        expect(newState).toContainEqual(
            {
                content: "note 1",
                id: 1,
                votes: 1
            })

    })

    test('a new note can be added', () => {
        const newState = reducer(state, createNoteAction('note 3'))
        expect(newState).toHaveLength(state.length+1)
        console.log(newState[2])
    })
})