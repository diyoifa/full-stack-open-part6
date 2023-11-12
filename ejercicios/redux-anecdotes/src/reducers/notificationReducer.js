import { createSlice } from "@reduxjs/toolkit";


const notificationSlice = createSlice({
    name:'notification',
    initialState: null,
    reducers:{
        createNotification(state, action){
            return `${action.payload}`
        },
        deleteNotification(){
            return null
        }
    }
})

export const {createNotification, deleteNotification} = notificationSlice.actions
export default notificationSlice.reducer

export const setNotification = (notification, seconds) => {
    return async dispatch => {
        dispatch(createNotification(notification))
        setTimeout(()=>{
            dispatch(deleteNotification())
        }, seconds*1000)
    } 
}