import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { accountReducer } from "../reducers/accountReducer";
import quoteReducer from "../reducers/quoteReducer";

// interface State = {
//     account: {
//         balance: number
//     },
//      quote: {
//             text: string
//      }
// }

export const store = configureStore({
    reducer: {
        account: accountReducer,
        quote: quoteReducer
    },
})

type AppDispatchFunction = () => AppDispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: AppDispatchFunction = useDispatch;