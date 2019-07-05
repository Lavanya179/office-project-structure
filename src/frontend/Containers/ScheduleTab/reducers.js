import * as ActionTypes from '../../store/actionTypes'
import * as Immutable from 'immutable'

const initialState = {
  serviceInfo: 'Not fetched'
}

export const configReducer = (state, action) => {
  if (!state) {
    state = Immutable.fromJS(initialState)
  }

  if (
    action.type === ActionTypes.SUCCESS_GANGINGSERVICEINFO ||
    action.type === ActionTypes.ERROR_GANGINGSERVICEINFO
  ) {
    return state.set('serviceInfo', action.message)
  }

  return state
}
