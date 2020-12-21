import { ADD_CHARACTER } from './actionTypes'

export const addCharacter = (characterInfo) => {
    return {
        type: ADD_CHARACTER,
        payload: characterInfo
    }
}