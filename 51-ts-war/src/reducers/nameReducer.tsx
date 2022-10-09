import { createSlice } from "@reduxjs/toolkit";

const defaultName = '';

const nameSlice = createSlice({
    name: 'name',
    initialState: defaultName,
    reducers:{
        changeName(name, action){
            return name = action.payload;
        }
    }
})

export const {changeName} = nameSlice.actions;
export default nameSlice.reducer;