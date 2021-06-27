import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import productsReducer from './module/products'
import userReducer from './module/user'

const rootReducer = combineReducers({
    products: productsReducer,
    users: userReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store