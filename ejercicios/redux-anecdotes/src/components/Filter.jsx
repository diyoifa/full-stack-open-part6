import { useDispatch } from "react-redux"
import { search } from "../reducers/filterReducer"

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
      dispatch(search(event.target.value))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        Search: <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter