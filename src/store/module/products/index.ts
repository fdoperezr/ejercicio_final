import { combineReducers } from 'redux'
import getAllReducer from './getAllReducer'
import createReducer from './createReducer'
import getOneReducer from './getOneReducer'
import deleteRecuder from './deleteOneReducer'


const rootReducer = combineReducers({
    getall: getAllReducer,
    getone: getOneReducer,
    create: createReducer,
    deleteone: deleteRecuder
})

export default rootReducer