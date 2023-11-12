const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return {
        ...initialState, good: initialState.good++
      }
    case 'OK':
      return {
        ...initialState, ok: initialState.ok++
      }
    case 'BAD':
      return {
        ...initialState, bad: initialState.bad++
      }
    case 'ZERO':
      return {
        ...initialState, 
        good: initialState.good = 0, 
        ok: initialState.ok = 0,
        bad: initialState.bad = 0
      }
    default: return state
  }
  
}

export default counterReducer


// export const noteReducer = (state = [], action) => {
//   if(action.type === '@notes/created'){
//     return  [...state, action.payload]
//   }
//   if(action.type === '@notes/toggle_importance'){
//     return state.map(note => {
//       if(note.id === action.payload.id){
//         return {
//           ...note, important: !note.important
//         }
//       }
//       return note
//     })
//   }

// }

// const generateId = ()=> Math.floor(Math.random() * 99999999) + 1

// export const createNote = content => {
//   return {
//     type:'@notes/created',
//     payload:{
//       content,
//       important: false,
//       id: generateId()
//     }
//   }
// }
// export const toggle = id => {
//   return  { 
//     type:'@notes/toggle_importance',
//     payload:{
//      id 
//     }
// }
// }