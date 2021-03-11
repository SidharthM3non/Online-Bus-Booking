package com.cg.OnlineBusBooking.controllers;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.OnlineBusBooking.entities.Booking;
import com.cg.OnlineBusBooking.entities.Feedback;
import com.cg.OnlineBusBooking.entities.User;
import com.cg.OnlineBusBooking.serviceinterfaces.IBookingService;

@RestController
@RequestMapping(path = "/api/v1/bookings") //URL specification before every method
public class BookingController {
	
	//Dependency Injection
	@Autowired
	IBookingService bookingService;
	
	//REST Method to add a booking
	@PostMapping("/")
	@ResponseStatus(HttpStatus.CREATED)
	public long addBooking(@RequestBody Booking booking) {
		return bookingService.addBooking(booking);
	}
	
	//REST Method to update a bookings date field
	@PutMapping("/update/{bookingId}")
	@ResponseStatus(HttpStatus.OK)
	@Transactional
	public boolean updateBookingDate (@PathVariable("bookingId") long bookingId) {
		return bookingService.updateBookingDate(bookingId);
	}
	
	//REST Method to delete a booking
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public boolean deleteBooking(@PathVariable("id") long id) {
		return bookingService.deleteBooking(id);
	}
	
	//REST Method to get the booking details from a specific booking ID
	@GetMapping("/{bookingId}")
	@ResponseStatus(HttpStatus.FOUND)
	public Booking getBookingDetailsById(@PathVariable("bookingId") long bookingId) {
		return bookingService.getBookingDetailsById(bookingId);
	}
	
	//REST Method to get the booking details from a specific date
	@GetMapping("/date/{date}")
	@ResponseStatus(HttpStatus.FOUND)
	public List<Booking> getAllBookingByDate(@PathVariable("date") String date){
		LocalDate d = LocalDate.parse(date); 
		return bookingService.getAllBookingByDate(d);
	}
	
	//REST Method to find all bookings
	@GetMapping("/")
	@ResponseStatus(HttpStatus.FOUND)
	public List<Booking> findAllBookings (){
		return bookingService.findAllBookings();
	}
	
	//REST Method to get the bookings from a specific bus route
	@GetMapping("/routeName/{routeName}")
	@ResponseStatus(HttpStatus.FOUND)
	public List<Booking> getAllBookingByBusRoute(@PathVariable("routeName") String routeName){
		return bookingService.getAllBookingByBusRoute(routeName);
	}
	
	//REST Method to add a feedback via booking ID
	@PostMapping("/feedback/{bookingId}")
	@ResponseStatus(HttpStatus.CREATED)
	public void addFeedback(@RequestBody User user,@PathVariable("bookingId") long bookingId) {
		bookingService.addFeedback(user, bookingId);
	}
	
	//REST Method to get feedbacks via specific bus route
	@GetMapping("/feedback/routeName/{routeName}")
	@ResponseStatus(HttpStatus.FOUND)
	public List<Feedback> getFeedbackByBusRoute(@PathVariable("routeName") String routeName){
		return bookingService.getFeedbackByBusRoute(routeName);
	}
	
	//REST Method to add a feedback with comment
	@PostMapping("/feedback/add/{username}:{bookingId}")
	@ResponseStatus(HttpStatus.CREATED)
	public void addFeedback(@PathVariable("username") String username, @PathVariable("bookingId") long bookingId, @RequestBody String comment) {
		bookingService.addFeedback(username, bookingId, comment);
	}
	
	
}
