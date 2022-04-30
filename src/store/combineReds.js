import {combineReducers} from 'redux'
import accountReducer from './accountReducer'

const mainReducer=combineReducers({
    state :accountReducer
})

export default mainReducer;