import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./reduxSlice"
// Store
const store = configureStore({
    reducer: {
        lists: articleReducer
    }
})

export default store