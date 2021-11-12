export const setMapLocation = (lon, lat, zoom) => {
    return ({
        type: 'MOVE_MAP', 
        payload: {lon, lat, zoom}
    })
}

export const setHoveredStateName = (stateName) => {
    return dispatch => dispatch({
        type: 'HOVER_STATE',
        payload: stateName
    })
}

export const setCongressNumber = (congressNumber) => {
    return dispatch => dispatch({
        type: 'CONGRESS_NUMBER',
        payload: congressNumber
    })
}

export const getMembers = () => {
    return dispatch => fetch('http://localhost:3000/api/v1/members')
    .then(response => response.json())
    .then(data => dispatch({type: 'GET_MEMBERS', payload: data}));
}

export const getMember = (congress, id) => {
    return dispatch => fetch(`http://localhost:3000/api/v1/members/${congress}/${id}`)
    .then(response => response.json())
    .then(data => dispatch({type: 'GET_MEMBER', payload: data}));
}