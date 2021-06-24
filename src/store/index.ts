import { createStore, combineReducers, applyMiddleware } from 'redux'
import superHeroReducer from './module/superheroes'


const rootReducer = combineReducers({
    superheroes: superHeroReducer,
})

const store = createStore(rootReducer)

export default store;