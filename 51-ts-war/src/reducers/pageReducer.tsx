import { createSlice } from "@reduxjs/toolkit";

const defaultPage = '';

const pageSlice = createSlice({
    name: 'page',
    initialState: defaultPage,
    reducers: {
        changePage(page, action) {
            return page = action.payload;
        },
    }
})

export const { changePage } = pageSlice.actions;
export default pageSlice.reducer;