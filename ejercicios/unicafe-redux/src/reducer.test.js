import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'
// import { noteReducer } from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })
  test('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })
  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })
  test('zero is reset', () => {
    const action = {
      type: 'ZERO'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })
  })
})



// describe('adding notes', ()=>{

//   test('toggle importance', ()=>{
//       const state = [
//         {
//           id: 1,
//           content: 'note1',
//           important: false
//         },
//         {
//           id: 2,
//           content: 'note2',
//           important: false
//         }
//       ]

//       const action = {
//         type: '@notes/toggle_importance',
//         payload: {
//           id: 2
//         }
//       }

//       deepFreeze(state)
//       const newState = noteReducer(state, action)

//       expect(newState).toHaveLength(2)
//       expect(newState).toContainEqual(state[0])
//       expect(newState).toContainEqual({
//         id: 2,
//         content: 'note2',
//         important: true
//       })

//   })
// })