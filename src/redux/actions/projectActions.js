import { ADD_PROJECT } from './actionTypes'

export const addProject = (projectInfo) => {
    return {
        type: ADD_PROJECT,
        payload: projectInfo
    }
}