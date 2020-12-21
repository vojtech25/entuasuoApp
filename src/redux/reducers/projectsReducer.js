import { ADD_PROJECT } from "../actions/actionTypes";

const initialState = {
    projects: []
}
export const projectsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, payload]
            }

        default:
            return state;
    }
}