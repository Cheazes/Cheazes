import React, { useState } from 'react';
import { fetchWeather } from '../actionFunctions/fetchWeather';
import { useAppDispatch } from  '../store/configureStore';

const Form =() => {
const [city,setCity] = useState('');
const dispatch  =useAppDispatch();

const handleClick = () => {
dispatch(fetchWeather(city));
setCity('');
    }

    const hadleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }
    return (<div>
        <input
         onChange={hadleChange}
             type='text'
             placeholder='City' 
             value= {city}/>
            <button onClick={handleClick}>Get weather</button>
        </div>
    );

};

export default Form