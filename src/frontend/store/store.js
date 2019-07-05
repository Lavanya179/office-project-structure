import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { debounce } from 'lodash'
import { GVMiddleware, GVDebug } from 'grassvalley'
import createRootReducer from './reducers'

const debug = GVDebug.extend('app').extend('store')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  createRootReducer(), // root reducer with router state
  composeEnhancers(
    applyMiddleware(
      thunk,
      store => next => action => {
        debug(`Reducing ${action.type}`)
        next(action)
      },
      ...GVMiddleware.get()
    )
  )
)

export { store }
