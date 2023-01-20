import { createSlice } from "@reduxjs/toolkit";
// Import Type
import { ListsType } from "./TypeScript";
const initialState: ListsType = {
    list: [],
}

export const articleSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        // Actions
        ADD_ARTICLE: (state: ListsType, action) => {
            state.list = [...state.list, action.payload]
        },
        REMOVE_ARTICLE: (state: ListsType, action) => {
            const { id } = action.payload
            state.list = state.list.filter((val) => val.id !== id)
        }
    }
})

export const {
    ADD_ARTICLE,
    REMOVE_ARTICLE
} = articleSlice.actions;

export default articleSlice.reducer