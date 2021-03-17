package com.cg.OnlineBusBooking.test;

import java.time.LocalDate;
import java.time.LocalTime;

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
	
	//@Test
	void testAddBooking() {
		LocalDate bDate = LocalDate.now();
		LocalTime startTime = LocalTime.now();
		LocalTime endTime = LocalTime.now();
		Booking b = new Booking(111111,"HIJ","4123","A","B",1,15,bDate,startTime,endTime);
		bookingService.addBooking(b);
	}

	//@Test
	void testUpdateBookingDate() {
		LocalDate date = LocalDate.now();
		bookingService.updateBookingDate(98761, date);
	}

	//@Test
	void testDeleteBooking() {
		bookingService.deleteBooking(111111);
	}

	@Test
	void testGetBookingDetailsById() {
		bookingService.getBookingDetailsById(123451);
	}

	//@Test
	void testGetAllBookingByDate() {
		LocalDate date = LocalDate.parse("2021-03-11");
		bookingService.getAllBookingByDate(date);
	}

	//@Test
	void testGetAllBookingByBusRoute() {
		bookingService.getAllBookingByBusRoute("AtoB");
	}

	//@Test
	void testGetFeedbackByBusRoute() {
		bookingService.getFeedbackByBusRoute("AtoB");
	}

	//@Test
	void testFindAllBookings() {
		bookingService.findAllBookings();
	}

	@Test
	void testAddFeedbackUserLong() {
		User user = new User();
		user.setUsername("HIJ");
		user.setPassword("pass123word");
		bookingService.addFeedback(user, 123451);
	}

	//@Test
	void testAddFeedbackStringLongString() {
		bookingService.addFeedback("ABC", 443141, "Good ride");
	}

}
