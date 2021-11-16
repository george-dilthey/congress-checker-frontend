const initialState = {
    mapLocation: {
        lon: -98.7275,
        lat: 38.6652,
        zoom: 3.64 
    },
    hoveredStateName: '',
    congressNumber: 117,
    chamber: 'Senate',
    roles: [],
    selectedMember: {...{}, roles: [{}]}
}

export default function reducer(state=initialState, {type, payload}){
    switch(type){
        case 'MOVE_MAP':
            return {...state, mapLocation: payload};
        case 'HOVER_STATE': 
            return {...state, hoveredStateName: payload};
        case 'GET_ROLES':
            return {...state, selectedMember: {...{}, roles: [{}]}, roles: payload};
        case 'GET_MEMBER':
            return {...state, selectedMember: payload};
        case 'SET_CONGRESS_NUMBER':
            return {...state, congressNumber: payload};
        case 'SET_CHAMBER':
            return {...state, chamber: payload};               
        default:
            return {...state};    
    }
}