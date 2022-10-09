import { putMessage } from "../reducers/messageReducer"
import { putWeatherInfo } from "../reducers/weatherReducer";
import { api_key, base_url } from "../units/constants";
import { AppDispatch } from "../store/configureStore";


// export const fetchWeather = city => {
//     return async(dispatch)=> {
//         dispatch(putMessage('Pending...'));
//         try{
//        const response= await fetch(`${base_url}?q=${city}&appid=${api_key}`)
//        const data = await response.json();
//               dispatch(putMessage(null))
//               dispatch(putWeatherInfo(data));
//         }catch (e){
//             console.log(e);
//             dispatch(putMessage('Enter correct city name'));
//         }
//     }
// }

export const fetchWeather = (city:string) => {
    return (dispatch:AppDispatch) => {
        dispatch(putMessage('Pending...'));
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = {
                    temp: data.main.temp as string,
                    city: data.name as string,
                    country: data.sys.country as number,
                    pressure: data.main.pressure as number,
                    sunset: data.sys.sunset as number,
                }
                dispatch(putMessage(null))
                dispatch(putWeatherInfo(weatherInfo));
            })
            .catch(e => {
                console.log(e);
                dispatch(putMessage('Enter correct city name'));
            })
    }
}