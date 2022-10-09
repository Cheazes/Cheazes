import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultQuote = {
    text: "Winter is coming..."
}

const quoteSlice = createSlice({
    name: 'quote',
    initialState: defaultQuote,
    reducers: {
        putQuote(quote, action: PayloadAction<string>) {
           quote.text = action.payload
        }
    }
})

export const {putQuote} = quoteSlice.actions;
export default quoteSlice.reducer;