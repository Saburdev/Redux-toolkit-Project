import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        todos:todosSlice
    },
    middleware: [thunk]
})