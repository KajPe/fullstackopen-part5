
const initialState = {
  hyva: 0,
  neutraali: 0,
  huono: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      return { ...state, hyva: state.hyva + 1 }
    case 'OK':
      return { ...state, neutraali: state.neutraali + 1 }
    case 'BAD':
      return { ...state, huono: state.huono + 1 }
    case 'ZERO':
      return initialState
  default:
      return initialState
  }
}

export default counterReducer
