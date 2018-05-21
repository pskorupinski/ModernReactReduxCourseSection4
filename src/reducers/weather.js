import { FETCH_WEATHER } from "../actions";

// Initial state of array as we want to keep a list of the cities
export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        // Always replace the state - to not work on the state object!!
        return [ action.payload.data, ...state ];
    }

    return state;
}