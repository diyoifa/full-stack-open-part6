import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import App from './App'
import counterReducer from './reducer'

// import { noteReducer } from './reducer'
const store = createStore(counterReducer)

// const store = createStore(noteReducer)


const App = () => {
  const goodState = store.getState().good
  console.log("🚀 ~ file: main.jsx:16 ~ App ~ goodState:", goodState)
  const okState = store.getState().ok
  console.log("🚀 ~ file: main.jsx:18 ~ App ~ okState:", okState)
  const badState = store.getState().bad
  console.log("🚀 ~ file: main.jsx:20 ~ App ~ badState:", badState)

  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const reset = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <button onClick={good}>good</button> 
      <button onClick={ok}>ok</button> 
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      <div>good: {goodState}</div>
      <div>ok: {okState}</div>
      <div>bad: {badState}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App/>)
}
renderApp()
store.subscribe(renderApp)

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// )