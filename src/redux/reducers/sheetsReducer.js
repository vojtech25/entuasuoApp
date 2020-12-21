import { ADD_SHEET } from "../actions/actionTypes";

const initialState = {
    sheets: []
}
export const sheetsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_SHEET:
            return {
                ...state,
                sheets: [...state.sheets, payload]
            }
        default:
            return state;
    }
}