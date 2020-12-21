import { ADD_SHEET } from './actionTypes'

export const addSheet = (sheetInfo) => {
    return {
        type: ADD_SHEET,
        payload: sheetInfo
    }
}