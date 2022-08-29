const init = {
    cars: ['BMW'],
}

export default function reducer(state = init, action, agrs){
    switch(action){
        case 'ADD':
            const [newCar] = agrs 
            return{
                ...state,
                cars: [...state.cars, newCar]
            }
        default:
            return state
    }
}