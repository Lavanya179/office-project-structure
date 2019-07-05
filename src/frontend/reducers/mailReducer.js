import { GVActionTypes } from 'grassvalley'
import * as Immutable from 'immutable'

const initialState = {
  mailboxInitialised: false
}

export const mailReducer = (state, action) => {
  if (!state) {
    state = Immutable.fromJS(initialState)
  }

  if (action.type === GVActionTypes.GV_SET_DEFAULT_MAILBOX) {
    return state.set('mailboxInitialised', !!action.payload)
  }
  return state
}