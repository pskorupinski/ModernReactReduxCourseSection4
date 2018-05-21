import axios from 'axios';

const OPENWEATHERMAP_API_KEY = '98fe03102d34cb5acfef7b9f41b814e9';
const OPENWEATHERMAP_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHERMAP_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    // TODO Replace with Saga

    const url = `${OPENWEATHERMAP_ROOT_URL}&q=${city},pl`;
    const request = axios.get(url);

    // Thanks to redux-promise, "request" will turn from promise to the actual response (handled in the meantime)
    return {
        type: FETCH_WEATHER,
        payload: request
    };
    
}