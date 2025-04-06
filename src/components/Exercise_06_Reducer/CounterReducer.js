const initialState = {count: 0}

const Reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return{...state, count: state.count + 5}
        case 'decrement':
            return{...state, count: state.count - 5}
        case 'multiply':
            return{...state, count: state.count * 5}
        case 'divide':
            return{...state, count: ((state.count === 0) ? 0 : (Math.floor(state.count / 5)))}
        case 'reset':
            return{...state, count: 0}
        case 'incrementByAmount':
            return{count: state.count + action.payload}
        case 'decrementByAmount': 
            return{count: state.count - action.payload}
        default:
            break;
    }
}

export {initialState, Reducer}