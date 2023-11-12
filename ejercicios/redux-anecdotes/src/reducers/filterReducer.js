// const reducer =  (state = " ", action) => {

// //   console.log('state now: ', state)
// //   console.log('action', action)

//   switch(action.type){
//     case '@anecdotes/search' :
//         return action.payload
//     default :
//         return state
//   }
// }

// export const search = (key)=>{
//     return {
//         type: '@anecdotes/search',
//         payload: key
//     }
// }

// export default reducer

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: " ",
    reducers:{
        search(state, action){
            return state = action.payload
        }
    }
})

export const {search} = filterSlice.actions
export default filterSlice.reducer
