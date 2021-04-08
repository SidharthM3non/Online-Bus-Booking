export const saveUser = (payload) => {
    return {type: "ADD_USER", payload: {payload, message: "Successfully added user!"}}
}

export const addUser = (payload) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/users/', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveUser(payload))
                }
            })   
    }
}

export const getUser = (payload) => {
    return {type: "GET_USER", payload}
}

export const errorUser = (payload) => {
    return {type: "ERROR_USER", payload}
}


export const checkUser = (username, password) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/users/' + username, requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 302){
                    console.log("found");
                    dispatch(getUser(username));
                    
                }
                else{
                    dispatch(errorUser("Incorrect credentials"));
                }
            })   
    }
}

export const findBookings = (payload) => {
    return {type: "FIND_USERBOOKINGS", payload: payload}
}

export const fetchBookings = (username) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/bookings/user/' + username, requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findBookings(data));
            }) 
    }
}