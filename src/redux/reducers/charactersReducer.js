import { ADD_CHARACTER } from "../actions/actionTypes";

const initialState = {
    characters: []
}
export const charactersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHARACTER:
            return {
                ...state,
                characters: [...state.characters, payload]
            }
        default:
            return state;
    }
}