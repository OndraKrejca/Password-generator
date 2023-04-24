import { HANDLECHANGE } from '../assets/Helpers'

const reducer = (state, action) => {
  if (action.type === HANDLECHANGE) {
    const { name, value } = action.payload

    return {
      ...state,
      [name]: value,
    }
  }
  return
}

export default reducer
