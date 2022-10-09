import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import deckReducer from "../reducers/deckReducer";
import nameReducer from "../reducers/nameReducer";
import pageReducer from "../reducers/pageReducer";
import resultReducer from "../reducers/resultReducer";

export const store = configureStore({
    reducer:{
        page: pageReducer,
        name:nameReducer,
        deck: deckReducer,
        result:resultReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch : () => AppDispatch = useDispatch;