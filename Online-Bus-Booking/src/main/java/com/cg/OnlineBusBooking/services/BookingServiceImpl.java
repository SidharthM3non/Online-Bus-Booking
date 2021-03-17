package com.cg.OnlineBusBooking.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.OnlineBusBooking.entities.Booking;
import com.cg.OnlineBusBooking.entities.Bus;
import com.cg.OnlineBusBooking.entities.Feedback;
import com.cg.OnlineBusBooking.entities.User;
import com.cg.OnlineBusBooking.exceptions.BookingAlreadyExistException;
import com.cg.OnlineBusBooking.exceptions.BookingNotFoundException;
import com.cg.OnlineBusBooking.exceptions.UserNotFoundException;
import com.cg.OnlineBusBooking.repositories.IBookingRepository;
import com.cg.OnlineBusBooking.repositories.IBusOperatorRepository;
import com.cg.OnlineBusBooking.repositories.IBusRepository;
import com.cg.OnlineBusBooking.repositories.IFeedbackRepository;
import com.cg.OnlineBusBooking.repositories.IUserRepository;
import com.cg.OnlineBusBooking.serviceinterfaces.IBookingService;

@Service
@Transactional
public class BookingServiceImpl implements IBookingService {
	
	static final Logger log = 
	        LoggerFactory.getLogger(BookingServiceImpl.class);
	
	//Dependency injections of required repositories
	
	@Autowired
	IBookingRepository bookingRepository;
	
	@Autowired
	IBusRepository busRepository;
	
	@Autowired
	IFeedbackRepository feedbackRepository;
	
	@Autowired
	IBusOperatorRepository busOperatorRepository;
	
	@Autowired
	IUserRepository userRepository;
	
	//Code start - By Sadathulla Shariff
	
	//getAllBookingByDate(LocalDate):List<Booking>
	@Override
	public List<Booking> getAllBookingByDate(LocalDate date){
		List<Booking> booking = bookingRepository.findByDate(date);
		return booking;
	}
	
	//getAllBookingByBusRoute(String):List<Booking>
	@Override
	public List<Booking> getAllBookingByBusRoute(String routeName){
		List<Booking> booking = bookingRepository.findByBusRouteRouteName(routeName);
		return booking;
	}
	
	//Method to update a booking date by its ID
	@Override
	public boolean updateBookingDate(long bookingId, LocalDate date) {
		boolean result = false;
		Optional<Booking> b = bookingRepository.findByBookingId(bookingId);
		Booking b1 = null;
		if(b.isPresent()) {
			b1 = b.get();
			b1.setDate(date);
			result = true;
		}
		return result;
	}
	
	//deleteBooking(long):boolean
	@Override
	public boolean deleteBooking (long bookingid) {
		Optional<Booking> booking = bookingRepository.findByBookingId(bookingid);
		Booking b = null;
		boolean result = false;	
		if (booking.isPresent()) {
			b=booking.get();
			b.setBus(null);
			b.setBusRoute(null);
			b.setUser(null);
			bookingRepository.delete(b);
			result = true;
		} else {
			throw new BookingNotFoundException("booking doesn't exist!!!");
		}
		return result;
	}
	
	//addFeedback(String,long,String):void
	@Override
	public void addFeedback(String username, long bookingid, String comment) {
		Optional<Booking> booking = bookingRepository.findByBookingId(bookingid);
		Feedback feedback = feedbackRepository.findByUsername(username);
		Feedback f = null;
		Feedback f1 = new Feedback();
		Booking b = null;
		if(booking.isPresent()) {
			b = booking.get();
		}

		Optional<User> user = userRepository.findByUsername(username);
		User u = null;
		if(user.isPresent()) {
			u = user.get();
		}
		
		if(booking.isPresent() && feedback != null) {
			f = feedback;
			f.setComment(comment);
			feedbackRepository.save(f);
		}
		else {
			f1.setRouteName((b.getBusRoute()).getRouteName());
			f1.setComment(comment);
			f1.setUsername(username);
			f1.setUser(u);
			feedbackRepository.save(f1);
		}
	}
	
	//Code end - By Sadathulla Shariff
	
	//Code start - By Sajin S
	
	//addBooking(Booking):long
	@Override
	public long addBooking(Booking booking) {
		Optional<Booking> b1 = bookingRepository.findByBookingId(booking.getBookingId());
		Bus bus = busRepository.findByBusNumber(booking.getBusNumber());
		Optional<User> user = userRepository.findByUsername(booking.getUsername());
		Booking b = null;
		User u = null;
		if(b1.isPresent()) {
			throw new BookingAlreadyExistException("Booking already exist");		
		} 
		else {
			b = booking;
			u = user.get();
			b.setBus(bus);
			b.setUser(u);
			b.setBusRoute(bus.getBusRoute());
			bookingRepository.save(b);
		}
		return booking.getBookingId();
	}

	//getBookingDetailsById(long):Booking
	@Override
	public Booking getBookingDetailsById(long bookingid) {
		Booking b = null;
		Optional<Booking> booking = bookingRepository.findByBookingId(bookingid);
		if (booking.isPresent()) {
			b= booking.get();
		}
		else {
			throw new BookingNotFoundException("booking doesn't exist!!!");
		}
		return b;
	}
	
	//getFeedbackByBusRoute(String):List<Booking>
	@Override
	public List<Feedback> getFeedbackByBusRoute(String routeName){
		List<Feedback> feedback = feedbackRepository.findByRouteName(routeName);
		return feedback;
	}
	
	//addFeedback(User,Long):void
	@Override
	public void addFeedback(User user,long bookingId) {
		Optional<Booking> booking = bookingRepository.findByBookingId(bookingId);
		Booking b = null;
		Feedback f = new Feedback();
		if(booking.isPresent()) {
			b = booking.get();
		} else {
			throw new BookingNotFoundException("Booking not found");
		}
		
		Optional<User> user1 = userRepository.findByUsername(user.getUsername());
		User u = null;
		if(user1.isPresent()) {
			u = user1.get();
		} else {
			throw new UserNotFoundException("User not found!!!");
		}
		
		
		f.setRouteName((b.getBusRoute()).getRouteName());
		f.setUsername(u.getUsername());
		f.setUser(u);
		feedbackRepository.save(f);
 	}
	
	@Override
	public List<Booking> findAllBookings(){
		List<Booking> booking = bookingRepository.findAll();
		if (booking.isEmpty()) {
			throw new BookingNotFoundException("bookings does not exist!!!");
		}
		return booking;
	}
	
	//Code end - By Sajin S
}
