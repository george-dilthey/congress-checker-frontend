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
    return dispatch => fetch('http://localhost:3000/users', {
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
    return dispatch => fetch('http://localhost:3000/sessions', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(res => handleUserResponse(res, dispatch))
} 

export const autoLogin = () => {
    return dispatch => fetch("http://localhost:3000/me", {
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

export const addMemberToChecklist = (mid, id) => {
    console.log(mid)
    return dispatch => fetch(`http://localhost:3000/api/v1/checklists/${id}`, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mid),
      })
      .then(res => handleUserResponse(res, dispatch))

}   