import { combineReducers } from "redux";
import { projectsReducer } from './projectsReducer'
import { charactersReducer } from './charactersReducer'
import { sheetsReducer } from './sheetsReducer'

const rootReducer = combineReducers({
    projects: projectsReducer,
    characters: charactersReducer,
    sheets: sheetsReducer
})
export default rootReducer

