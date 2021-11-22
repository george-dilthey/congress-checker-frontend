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
        type: 'SET_CONGRESS_NUMBER',
        payload: congressNumber
    })
}

export const setChamber = (chamber) => {
    return dispatch => dispatch({
        type: 'SET_CHAMBER',
        payload: chamber
    })
}

export const getRoles = () => {
    return dispatch => fetch('http://localhost:3000/api/v1/roles')
    .then(response => response.json())
    .then(data => dispatch({type: 'GET_ROLES', payload: data}));
}

export const getMember = (mid) => {
    return dispatch => fetch(`http://localhost:3000/api/v1/members/${mid}`)
    .then(response => response.json())
    .then(data => dispatch({type: 'GET_MEMBER', payload: data}));
}

export const submitSignup = (user) => {
    return dispatch => fetch('http://localhost:3000/api/v1/users', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(res => res.json())
      .then(console.log)
}

export const submitLogin = (user) => {
    return dispatch => fetch('http://localhost:3000/api/v1/sessions', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(res => res.json())
      .then(console.log)
} 