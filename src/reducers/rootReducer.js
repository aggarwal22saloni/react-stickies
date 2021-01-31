import notesContentReducer from './notesContentReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    notesData : notesContentReducer,
});

export default rootReducer