import { createSlice } from "@reduxjs/toolkit";

const defaultResults = {
    compCurrentScore: 0,
    userCurrentScore: 0,
    compScore: 0,
    userScore: 0,
    result: '',
};

const resultSlice = createSlice({
    name: 'result',
    initialState: defaultResults,
    reducers: {
        setCompResult(result, action) {
            result.compCurrentScore += 1;
        },
        setUserResult(result, action) {
            result.userCurrentScore += 1;
        },
        winnerCheck(result, action) {
            if(result.compCurrentScore > result.userCurrentScore){
                result.compScore += 1;
                result.result = 'Lose';
            }
            if(result.compCurrentScore < result.userCurrentScore){
                result.userScore += 1;
                result.result = 'Win';
            }
            if(result.compCurrentScore === result.userCurrentScore){
                result.result = 'Draw';
            }
        },
        resetResult(result, action) {
            result.compCurrentScore = 0;
            result.userCurrentScore = 0;
        },
    }
})

export const { setCompResult, setUserResult, winnerCheck, resetResult } = resultSlice.actions;
export default resultSlice.reducer;