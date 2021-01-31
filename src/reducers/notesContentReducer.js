import * as ActionType from '../actions/ActionType'

let initialState = {
    notesData: [],
}

const notesContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_NOTES: {
      return {
        ...state,
        notesData: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default notesContentReducer
