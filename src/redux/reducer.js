const initialState = {
    mapLocation: {
        lon: -98.7275,
        lat: 38.6652,
        zoom: 3.64 
    },
    hoveredStateName: ''
}

export default function reducer(state=initialState, {type, payload}){
    switch(type){
        case 'MOVE_MAP':
            return {...state, mapLocation: payload};
        case 'HOVER_STATE':
            return {...state, hoveredStateName: payload};
        default:
            return {...state};    
    }
}