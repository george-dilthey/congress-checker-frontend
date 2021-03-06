const api = process.env.REACT_APP_API

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
    return dispatch => fetch(api + 'api/v1/roles')
    .then(response => response.json())
    .then(data => {
      console.log('d')
      dispatch({type: 'GET_ROLES', payload: data})
    });
}

export const getMember = (mid) => {
    return dispatch => fetch(api + `api/v1/members/${mid}`)
    .then(response => response.json())
    .then(data => dispatch({type: 'GET_MEMBER', payload: data}));
}

export const submitSignup = (user) => {
    return dispatch => fetch(api + 'users', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(res => res.json())
      .then(response => {
        localStorage.token = response.token
        dispatch({type: 'SET_USER', payload: response.user})
    })
}

export const submitLogin = (user) => {
    return dispatch => fetch(api + 'sessions', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(res => handleUserResponse(res, dispatch))
} 

export const autoLogin = () => {
    return dispatch => fetch(api + "me", {
        headers: {
            'Authorization': localStorage.token
        
        }
    })
    .then(res => handleUserResponse(res, dispatch))
}

export const logout = () => {
    return dispatch => {
      localStorage.clear()
      dispatch({type: "LOGOUT"})
    }
  }

function handleUserResponse(res, dispatch){
    if (res.ok) {
      res.json()
      .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})
      })
    } else {
      res.json()
      .then(res => alert(res.errors))
    }
  }

export const updateChecklist = (data, id) => {
    return dispatch => fetch(api + `api/v1/checklists/${id}`, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => handleUserResponse(res, dispatch))

}   