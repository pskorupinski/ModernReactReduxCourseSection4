// state is not application's state
// but the state this reducer is responsible for (the state this reducer returns!)
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}