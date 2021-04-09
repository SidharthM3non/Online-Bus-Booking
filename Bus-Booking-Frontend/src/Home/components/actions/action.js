
export const saveBooking = (payload) => {
    return {type: "ADD_BOOKING", payload: {message: "Successfully added Booking!"}}
}

export const addBooking = (payload) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/bookings/', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveBooking())
                }
            })   
    }
}

export const findBookings = (payload) => {
    return {type: "FIND_BOOKINGS", payload: payload}
}

export const fetchBookings = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/bookings/', requestOptions)
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

const removeBooking = (payload) => {
    return {type: "DELETE_BOOKING", payload}
}

export const deleteBooking = (bookingId) =>{
    
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        console.log('Deleting booking ...' , bookingId)
        fetch('http://localhost:80/api/v1/bookings/' + bookingId, requestOptions)
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    message = 'Booking successfully deleted'
                }
                else{
                    message = 'Failed to delete booking'
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(removeBooking({bookings: data, message}))
                dispatch(fetchBookings())
            }) 
    }
}

const updateBooking = () => {
    return {type: "UPDATE_BOOKING", payload:{message: "Successfully updated"}}
}

export const updateBookings = (id, date) =>{
    
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({bookingId: id, date: date})
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/bookings/update/' + id + '/' + date, requestOptions)
            .then(response =>{
                console.log(response.status);
                if(response.status === 200){
                    // this.setState({date: this.date.current.value})
                    // this.setState({message: 'Booking updated sucessfully!'})
                    dispatch(updateBooking())
            }
            })
    }
}

export const saveBusop = (payload) => {
    return {type: "ADD_BUSOP", payload: {payload, message: "Successfully added bus operator!"}}
}

export const addBusop = (payload) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/busoperator/busop/', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveBusop(payload))
                }
            })   
    }
}

export const getBusop = (payload) => {
    return {type: "GET_BUSOP", payload}
}

export const errorBusop = (payload) => {
    return {type: "ERROR_BUSOP", payload}
}


export const checkBusop = (username, password) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/busoperator/busop/' + username + '/' + password, requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 302){
                    console.log("found");
                    dispatch(getBusop(username, password));                    
                }
                else{
                    dispatch(errorBusop("Incorrect credentials"));
                }
            })   
    }
}

export const saveBus = (payload) => {
    return {type: "ADD_BUS", payload: {message: "Successfully added Bus!"}}
}

export const addBus = (payload) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/busoperator/', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveBus())
                }
            })   
    }
}

export const fetchRev = (payload) => {
    console.log(payload);
    return {type: "GET_REV", payload}
}

export const fetchRouteRev = (routeName) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/busoperator/revenue/' + routeName, requestOptions)
            .then(res => {
                if(res.status === 200){
                    console.log(res);
                    return res.json();
                }
            })
            .then(data => {
                console.log(data);
                dispatch(fetchRev(data));
            })    
    }
}

export const fetchDatedRev = (payload) => {
    return {type: "GET_REV", payload: payload}
}

export const fetchDatedRouteRev = (routeName, date) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/busoperator/revenue/' + routeName + '/' + date, requestOptions)
            .then(res => {
                if(res.status === 200){
                    console.log(res);
                    return res.json();
                }
            })
            .then(data => {
                console.log(data);
                dispatch(fetchDatedRev(data));
            })    
    }
}

export const fetchMonthlyRev = (payload) => {
    return {type: "GET_REV", payload}
}

export const fetchMonthlyRouteRev = (routeName, month, year) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/busoperator/monthlyrevenue/' + routeName + '/' + month + '/' + year, requestOptions)
            .then(res => {
                if(res.status === 200){
                    console.log(res);
                    return res.json();
                }
            })
            .then(data => {
                console.log(data);
                dispatch(fetchMonthlyRev(data));
            })    
    }
}

export const fetchYearlyRev = (payload) => {
    return {type: "GET_REV", payload: payload}
}

export const fetchYearlyRouteRev = (routeName, year) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return dispatch => {
        fetch('http://localhost:80/api/v1/busoperator/yearlyrevenue/' + routeName + '/' +  year, requestOptions)
            .then(res => {
                if(res.status === 200){
                    console.log(res);
                    return res.json();
                }
            })
            .then(data => {
                console.log(data);
                dispatch(fetchYearlyRev(data));
            })    
    }
}