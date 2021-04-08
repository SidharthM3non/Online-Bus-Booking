package com.cg.OnlineBusBooking.controllers;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.cg.OnlineBusBooking.exceptions.BookingAlreadyExistException;
import com.cg.OnlineBusBooking.exceptions.BookingNotFoundException;
import com.cg.OnlineBusBooking.repositories.IBookingRepository;
import com.cg.OnlineBusBooking.serviceinterfaces.IBookingService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import javassist.NotFoundException;


class Message{
	String text;
	List<Booking> bookings;
	

	public Message(String text) {
		super();
		this.text = text;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public List<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}	
}
//Code start - By Sajin S & Sadathulla Shariff

@RestController
@CrossOrigin("*")
@RequestMapping(path = "/api/v1/bookings") //URL specification before every method
@Api(value = "Booking", tags = { "BookingAPI" })
public class BookingController {
	
	static final Logger log = 
	        LoggerFactory.getLogger(BookingController.class);
	
	//Dependency Injection
	@Autowired
	IBookingService bookingService;
	
	@Autowired
	IBookingRepository bookingRepository;
	
	/**
	 * This method is for adding a booking
	 * 
	 * @param Booking
	 * @throws BookingAlreadyExistException
	 */
	@PostMapping("/")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Add a booking", response = Booking.class)
	public long addBooking(@RequestBody Booking booking) {
		return bookingService.addBooking(booking);
	}
	
	/**
	 * This method is for updating the date of a booking
	 * 
	 * @param long
	 * @return boolean
	 * @throws BookingNotFoundException
	 */
	@PutMapping("/update/{bookingId}/{date}")
	@ResponseStatus(HttpStatus.OK)
	@Transactional
	@ApiOperation(value = "Update a booking date", notes = "Provide date in YYYY-MM-DD format", response = Booking.class)
	public boolean updateBookingDate (@PathVariable("bookingId") long bookingId, @PathVariable String date) {
		LocalDate date1 = LocalDate.parse(date);
		return bookingService.updateBookingDate(bookingId, date1);
	}
	
	/**
	 * This method is to delete a booking
	 * 
	 * @param long
	 * @return boolean
	 * @throws BookingNotFoundException
	 */
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	@ApiOperation(value = "Delete a booking", response = Booking.class)
	public Message deleteBooking(@PathVariable("id") long id) {
		bookingService.deleteBooking(id);
		Message message = new Message("Booking successfully deleted");
		List<Booking> bookings = bookingRepository.findAll();
		message.setBookings(bookings);
		return message;
	}
	
	/**
	 * This method is for getting booking details by ID
	 * 
	 * @param long
	 * @return List<Booking>
	 * @throws BookingNotFoundException
	 */
	@GetMapping("/{bookingId}")
	@ResponseStatus(HttpStatus.FOUND)
	@ApiOperation(value = "Get booking details by ID", response = Booking.class)
	public Booking getBookingDetailsById(@PathVariable("bookingId") long bookingId) {
		return bookingService.getBookingDetailsById(bookingId);
	}
	
	/**
	 * This method is for getting all bookings by date
	 * 
	 * @param String
	 * @return List<Booking>
	 * @throws BookingNotFoundException
	 */
	@GetMapping("/date/{date}")
	@ResponseStatus(HttpStatus.FOUND)
	@ApiOperation(value = "Get all booking details by date", response = Booking.class)
	public List<Booking> getAllBookingByDate(@PathVariable("date") String date){
		LocalDate d = LocalDate.parse(date); 
		return bookingService.getAllBookingByDate(d);
	}
	
	/**
	 * This method is for finding all bookings
	 * 
	 * @return List<Booking>
	 * @throws BookingNotFoundException
	 */
	@GetMapping("/")
	@ResponseStatus(HttpStatus.FOUND)
	@ApiOperation(value = "Get all bookings", response = Booking.class)
	public List<Booking> findAllBookings (){
		return bookingService.findAllBookings();
	}
	
	/**
	 * This method is for finding all bookings by bus route
	 * 
	 * @param String
	 * @return List<Booking>
	 * @throws BookingNotFoundException
	 */
	@GetMapping("/routename/{routeName}")
	@ResponseStatus(HttpStatus.FOUND)
	@ApiOperation(value = "Get all bookings by bus route", notes = "Provide Bus Route name", response = Booking.class)
	public List<Booking> getAllBookingByBusRoute(@PathVariable("routeName") String routeName){
		return bookingService.getAllBookingByBusRoute(routeName);
	}
	
	/**
	 * This method is to add a feedback by user and booking ID
	 * 
	 * @param User, long
	 * @throws NotFoundException
	 */
	@PostMapping("/feedback/{bookingId}")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Add a feedback", notes = "Provide a user and booking ID", response = Feedback.class)
	public void addFeedback(@RequestBody User user,@PathVariable("bookingId") long bookingId) {
		bookingService.addFeedback(user, bookingId);
	}
	
	/**
	 * This method is to get feedback by bus route
	 * 
	 * @param String
	 * @return List<Feedback>
	 * @throws NotFoundException
	 */
	@GetMapping("/feedback/routeName/{routeName}")
	@ResponseStatus(HttpStatus.FOUND)
	@ApiOperation(value = "Get feedback by bus route", response = Feedback.class)
	public List<Feedback> getFeedbackByBusRoute(@PathVariable("routeName") String routeName){
		return bookingService.getFeedbackByBusRoute(routeName);
	}
	
	/**
	 * This method is to add feedback by username, booking ID and comment
	 * 
	 * @param String, long, String
	 * @throws NotFoundException
	 */
	@PostMapping("/feedback/add/{username}:{bookingId}")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Add a feedback by username, booking ID and comment", response = Feedback.class)
	public void addFeedback(@PathVariable("username") String username, @PathVariable("bookingId") long bookingId, @RequestBody String comment) {
		bookingService.addFeedback(username, bookingId, comment);
	}
	
	//Code end - By Sajin S & Sadathulla Shariff	
	
	
	@GetMapping("/user/{username}")
	@ResponseStatus(HttpStatus.FOUND)
	@ApiOperation(value = "Get all bookings", response = Booking.class)
	public List<Booking> getAllBookingByUsername (@PathVariable("username") String username){
		return bookingService.getAllBookingByUsername(username);
	}
	
}
