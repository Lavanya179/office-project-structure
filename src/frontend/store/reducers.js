import { combineReducers } from 'redux'
import { GVReducers } from 'grassvalley'

import { mailReducer } from '../reducers/mailReducer'
import { configReducer } from '../containers/ConfigurationTab/reducers'
import { itemReducer, timeReducer } from '../containers/DiaryTab/reducers'

export default () =>
  combineReducers({
    ...GVReducers.get().getReducers(),
    platformInfo: mailReducer,
    configuration: configReducer,
    time: timeReducer,
    channelGangs: itemReducer
  })
