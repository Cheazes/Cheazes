import { createSlice } from "@reduxjs/toolkit"

interface Weather{
    temp:number,
    city: string,
    country: string,
    pressure:number,
    sunset: number,
}
const defaultWeather = {} as Weather;
// const defaultWeather = {}
// const weatherSlice = createSlice({
//     name: 'weather',
//     initialState: defaultWeather,
//     reducer: {
//         putWeatherInfo(weatherInfo,action){
//             weatherInfo.temp = action.payload.main.temp;
//             weatherInfo.city =action.payload.name;
//             weatherInfo.country = action.payload.sys.country;
//             weatherInfo.pressure = action.payload.main.pressure;
//             weatherInfo.sunset = action.payload.sys.sunset;

//         }
//     }
// })
// export const {putWeatherInfo} =  weatherSlice.actions;
// export default weatherSlice.reducer;
// const weatherSlice = createSlice({
//     name: 'weather',
//     initialState: defaultWeather,
//     reducer: {
//         putWeatherInfo(weatherInfo,action){
//             weatherInfo = action.payload;

//         }
//     }
// })
// export const {putWeatherInfo} =  weatherSlice.actions;
// export default weatherSlice.reducer;

const weatherSlice = createSlice({
    name: 'weather',
    initialState: defaultWeather,
    reducers: {
        putWeatherInfo(weatherInfo, action){
           return action.payload;
        }
    }
})

export const {putWeatherInfo} = weatherSlice.actions;
export default weatherSlice.reducer;