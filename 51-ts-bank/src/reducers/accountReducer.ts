import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultAccount = {
    balance: 0
}

const accountSlice = createSlice({
    name: 'account',
    initialState: defaultAccount,
    reducers: {
        deposit(account, action: PayloadAction<number>) {
            account.balance += action.payload;
        },
        withdraw(account, action) {
            const res = account.balance - action.payload;
            account.balance = res < 0 ? account.balance : res;
        }
    }
})

export const {deposit, withdraw} = accountSlice.actions;
export const accountReducer = accountSlice.reducer;