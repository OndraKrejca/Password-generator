import { HANDLECHANGE, HANDLESUBMIT, INDICATION } from '../assets/Helpers'

const reducer = (state, action) => {
  if (action.type === HANDLECHANGE) {
    const { name, value } = action.payload

    return {
      ...state,
      [name]: value,
    }
  }

  if (action.type === HANDLESUBMIT) {
    let setPassword = ''

    const random = (min = 0, max = 2) => {
      return Math.floor(Math.random() * (max + 1 - min) + min)
    }

    const setUpperCase = () => {
      return String.fromCharCode(random(65, 90))
    }

    const setLowerCase = () => {
      return String.fromCharCode(random(97, 122))
    }

    const setNumbers = () => {
      return random(0, 9)
    }

    const setSymbols = () => {
      const symbol = "~*$%@#^&!?*'-=/,.{}()[]<>"
      return symbol[random(symbol.length - 1)]
    }

    for (let i = 0; i < state.passLength; i++) {
      const choice = random(0, 2)

      if (
        !state.passUpper ||
        !state.passNumbers ||
        !state.passSymbols ||
        !state.passLower
      ) {
        setPassword += setLowerCase()
      }

      if (state.passUpper && choice === 0) {
        setPassword += setUpperCase()
      } else if (state.passNumbers && choice === 1) {
        setPassword += setNumbers()
      } else if (state.passSymbols && choice === 2) {
        setPassword += setSymbols()
      }
    }

    return {
      ...state,
      passWord: setPassword.slice(0, state.passLength),
    }
  }

  if (action.type === INDICATION) {
    const signArray = Object.values(state)
    const newArray = signArray.filter((item) => item === true)

    return {
      ...state,
      sign: newArray,
    }
  }

  return
}

export default reducer
