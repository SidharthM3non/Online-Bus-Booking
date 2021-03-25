const initialState = {
    message: '',
    bookings: [
        // { id: 1, bookingId: 2222222, username: 'ABC', busNumber: 2243, source: 'A', destination: 'B', numberOfSeats: 2, amountPaid: 30 },
        // { id: 12, bookingId: 2545342, username: 'DEF', busNumber: 2243, source: 'A', destination: 'B', numberOfSeats: 1, amountPaid: 15 },
        // { id: 13, bookingId: 1786243, username: 'XYZ', busNumber: 4123, source: 'A', destination: 'B', numberOfSeats: 2, amountPaid: 30 },
    ],
    users: []
}

const reducer = (state = initialState, { type, payload }) => {

    console.log(type);
    switch (type) {
        
    case "ADD_BOOKING":
       // let newBookings = [...state.bookings, payload]
        return {message: payload.message, bookings: state.bookings}
    case "DELETE_BOOKING":
        var filteredList = state.bookings.filter((booking)=>
            booking.bookingId !== payload.bookingId)
        //console.log(filteredList)
        return { bookings: filteredList}
    case "FIND_BOOKINGS":
        console.log(payload)
        return {bookings: payload}  
    case "UPDATE_BOOKING":
        return {bookings: state.bookings}  
    case "ADD_USER":
         return {users: state.users} 
    case "GET_USER":
        console.log(payload) 
    default:
        return state
    }
}

export default reducer;