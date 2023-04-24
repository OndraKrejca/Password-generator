import React, { useContext, useReducer } from 'react'
import reducer from '../reducer/Reduce.jsx'
import { HANDLECHANGE } from '../assets/Helpers.jsx'

const AppContext = React.createContext()

const initialState = {
  passWord: '',
  passLength: 0,
  passUpper: false,
  passLower: false,
  passNumbers: false,
  passSymbols: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name !== 'passLength') {
      value = e.target.checked
    }

    dispatch({ type: HANDLECHANGE, payload: { name, value } })
  }

  const random = (min = 65, max = 90) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
  }
  // let char = String.fromCharCode(65, 90)

  return (
    <AppContext.Provider value={{ ...state, handleChange }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
