import { useSelector, 
  // useDispatch 
} from "react-redux"
// import { deleteNotification } from "../reducers/notificationReducer"
// import { useEffect } from "react"

const Notification = () => {
  const notification = useSelector(state => state.notification)
  //  const dispatch = useDispatch()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     dispatch(deleteNotification())
  //   }, 6000)
  // },[notification, dispatch])

  return (
    <div>
      {notification && <h1 style={style}>{notification}</h1>}
    </div>
  )
}

export default Notification