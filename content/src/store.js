import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './reducers/filterReducer'
import noteReducer from './reducers/noteReducer'
const store = configureStore({
  reducer:{
    notes: noteReducer,
    filter: filterReducer
  }
})

console.log(store.getState())
export default store