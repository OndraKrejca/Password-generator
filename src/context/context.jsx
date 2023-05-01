import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/Reduce.jsx'
import { HANDLECHANGE, HANDLESUBMIT, INDICATION } from '../assets/Helpers.jsx'

const AppContext = React.createContext()

const initialState = {
  passWord: '...',
  passLength: 10,
  passUpper: false,
  passLower: false,
  passNumbers: false,
  passSymbols: false,
  sign: [],
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

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: HANDLESUBMIT })
  }

  useEffect(() => {
    dispatch({ type: INDICATION })
  }, [state.passUpper, state.passNumbers, state.passSymbols])

  return (
    <AppContext.Provider value={{ ...state, handleChange, handleSubmit }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
