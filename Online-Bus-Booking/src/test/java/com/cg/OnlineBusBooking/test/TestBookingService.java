package com.cg.OnlineBusBooking.test;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cg.OnlineBusBooking.entities.Booking;
import com.cg.OnlineBusBooking.entities.User;
import com.cg.OnlineBusBooking.serviceinterfaces.IBookingService;

@SpringBootTest
class TestBookingService {
	
	@Autowired
	IBookingService bookingService;
	
//	@Test
	void testAddBooking() {
		Booking b = new Booking(98761,"HIJ","4123","A","B",1,15,null,null,null,null,null,null);
		bookingService.addBooking(b);
	}

//	@Test
	void testUpdateBookingDate() {
		bookingService.updateBookingDate(45);
	}

//	@Test
	void testDeleteBooking() {
		bookingService.deleteBooking(45);
	}

//	@Test
	void testGetBookingDetailsById() {
		bookingService.getBookingDetailsById(45);
	}

//	@Test
	void testGetAllBookingByDate() {
		LocalDate date = LocalDate.parse("2021-03-02");
		bookingService.getAllBookingByDate(date);
	}

//	@Test
	void testGetAllBookingByBusRoute() {
		bookingService.getAllBookingByBusRoute("A to B");
	}

//	@Test
	void testGetFeedbackByBusRoute() {
		bookingService.getFeedbackByBusRoute("A to B");
	}

//	@Test
	void testFindAllBookings() {
		bookingService.findAllBookings();
	}

//	@Test
	void testAddFeedbackUserLong() {
		User user = new User();
		user.setUsername("HIJ");
		user.setPassword("pass123word");
		bookingService.addFeedback(user, 98761);
	}

//	@Test
	void testAddFeedbackStringLongString() {
		bookingService.addFeedback("Ravi", 45, "Good ride");
	}

}
