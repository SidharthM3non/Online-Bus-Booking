const initialState = {
  message: '',
  errorMessage: '',
  bookings: [
      // { id: 1, bookingId: 2222222, username: 'ABC', busNumber: 2243, source: 'A', destination: 'B', numberOfSeats: 2, amountPaid: 30 },
      // { id: 12, bookingId: 2545342, username: 'DEF', busNumber: 2243, source: 'A', destination: 'B', numberOfSeats: 1, amountPaid: 15 },
      // { id: 13, bookingId: 1786243, username: 'XYZ', busNumber: 4123, source: 'A', destination: 'B', numberOfSeats: 2, amountPaid: 30 },
  ],
  userBookings: [],
  busOps: undefined,
  busOp: [],
  progress: false,
  login: false,
  bus: [],
  revenue: 0,
  user: [],
  users: undefined,
}

const reducer = (state = initialState, { type, payload }) => {

  console.log(type);
  switch (type) {
      
    case "ADD_BOOKING":
     // let newBookings = [...state.bookings, payload]
        return {...state, message: payload.message, bookings: state.bookings}
    case "DELETE_BOOKING":
      var filteredList = state.bookings.filter((booking)=>
          booking.bookingId !== payload.bookingId)
      //console.log(filteredList)
        return { ...state, bookings: filteredList}
    case "FIND_BOOKINGS":
      console.log(payload)
        return {...state, bookings: payload} 
    case "FIND_USERBOOKINGS":
        console.log(payload)
        return {...state, userBookings: payload}  
    case "UPDATE_BOOKING":
        return {...state, bookings: state.bookings}  
    case "ADD_BUSOP":
        return {...state, busOp: state.busOp, message: payload.message} 
    case "GET_BUSOP":
        return {
        ...state,
        busOps: payload};
    case "PROGRESS":
        return {...state, progress: payload};
    case "LOGIN":
        return {...state, loginSuccess: payload};
    case "ERROR_BUSOP":
        return {...state, errorMessage: payload};   
    case "ADD_BUS":
        return {...state, message: payload.message, bus: state.bus}
    case "GET_REV":
      console.log(payload)
        return {...state, revenue: payload}
    case "ADD_USER":
        return {...state, user: state.user, message: payload.message}
    case "GET_USER":
        return {
        ...state,
        users: payload};
    case "ERROR_USER":
        return {...state, errorMessage: payload};  
  default:
      return state
  }
}

export default reducer;