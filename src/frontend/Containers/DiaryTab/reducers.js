import * as ActionTypes from '../../store/actionTypes'
import * as Immutable from 'immutable'

const timeInitialState = {
  time: ''
}

const itemInitialState = {
  fetching: true,
  items: [],
  selectedItem: {}
}

export const itemReducer = (state = itemInitialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_ITEMS:
      return {
        items: action.items,
        fetching: action.fetching
      }
    case ActionTypes.GET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: state.items[action.index]
      }
    default:
      return state
  }
}

export const timeReducer = (state = timeInitialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_TIME:
      return action.time
    default:
      return state
  }
}
