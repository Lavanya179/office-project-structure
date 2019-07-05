import * as ActionTypes from '../../store/actionTypes'
const items = [
  {
    id: 1,
    programme: 'Telejournel',
    controlPoint: 'HAL Studio',
    startTime: 5,
    endTime: 10,
    gang: 1
  },
  {
    id: 2,
    programme: 'Les Sports',
    controlPoint: 'HIL Studio',
    startTime: 9,
    endTime: 13,
    gang: 2
  },
  {
    id: 3,
    programme: 'Something',
    controlPoint: 'Other Studio',
    startTime: 14,
    endTime: 16.5,
    gang: 3
  },
  {
    id: 4,
    programme: 'News',
    controlPoint: 'HAL Studio',
    startTime: 11,
    endTime: 19,
    gang: 4
  },
  {
    id: 5,
    programme: 'News',
    controlPoint: 'HAL Studio',
    startTime: 11,
    endTime: 19,
    gang: 5
  },
  {
    id: 6,
    programme: 'News',
    controlPoint: 'HAL Studio',
    startTime: 6,
    endTime: 10,
    gang: 6
  },
  {
    id: 7,
    programme: 'News',
    controlPoint: 'HAL Studio',
    startTime: 0,
    endTime: 3,
    gang: 9
  }
]
export const readSelectedItem = index => {
  return {
    type: ActionTypes.GET_SELECTED_ITEM,
    index
  }
}
export const loadItems = () => {
  return dispatch => {
    dispatch(getItems(items))
  }
}
export const getItems = gangItems => {
  return {
    cons: console.log('called', items),
    type: ActionTypes.LOAD_ITEMS,
    fetching: false,
    items: gangItems
  }
}

export const updateTime = () => {
  return dispatch => {
    let now = new Date() // current date
    let hour
    if (now.getMinutes > 29) {
      hour = now.getHours() + 0.5
    } else {
      hour = now.getHours()
    }
    // call this function again in 5s
    dispatch(getTime(hour))
    setInterval(() => {
      dispatch(getTime(hour))
    }, 5000)
  }
}

export const getTime = time => {
  return {
    type: ActionTypes.UPDATE_TIME,
    time
  }
}
