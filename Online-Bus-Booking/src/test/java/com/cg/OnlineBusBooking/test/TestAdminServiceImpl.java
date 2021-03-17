package com.cg.OnlineBusBooking.test;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cg.OnlineBusBooking.entities.Booking;
import com.cg.OnlineBusBooking.entities.Bus;
import com.cg.OnlineBusBooking.repositories.IBookingRepository;
import com.cg.OnlineBusBooking.repositories.IBusRepository;
import com.cg.OnlineBusBooking.services.AdminServiceImpl;

@SpringBootTest
class TestAdminServiceImpl {
	
	@Autowired
	AdminServiceImpl adminServiceImpl;
	
	@Autowired
	IBookingRepository bookingRepository;
	
	@Autowired
	IBusRepository busRepository;
	
//	@Test
	void testGetAllBusOperator() {
		adminServiceImpl.getAllBusOperator();
	}

	//@Test
	void testGetAllBusOperatorByRoute() {
		adminServiceImpl.getAllBusOperatorByRoute("AtoB");
	}

//	@Test
	void testGetAllBusOperatorsRequest() {
		adminServiceImpl.getAllBusOperatorsRequest();
	}

//	@Test
	@Transactional
	void testUpdateBusTime() {
		LocalTime startTime = LocalTime.parse("08:00");
		LocalTime endTime = LocalTime.parse("13:00");
		adminServiceImpl.updateBusTime(123451, startTime, endTime);
	}

//	@Test
	@Transactional
	void testUpdateBusRoute() {
		Bus bus = new Bus("2243",40,15);
		String busRoute = "aaa";
		adminServiceImpl.updateBusRoute(bus, busRoute);
	}

//	@Test
	@Transactional
	void testUpdateBusFare() {
		Bus bus = new Bus("2243",40,15);
		adminServiceImpl.updateBusFare(bus, 30);
	}

// 	@Test
	void testDeleteBus() {
		Bus bus = new Bus("1122",30,15);
		adminServiceImpl.deleteBus(bus);
	}

//	@Test
	void testDeleteBusByOperator() {
		adminServiceImpl.deleteBusByOperator("Ravi");
	}

//	@Test
	void testGetRevenueByDate() {
		LocalDate date = LocalDate.parse("2021-03-11");
		adminServiceImpl.getRevenueByDate(date);
	}

//	@Test
	void testGetRevenueByBusRoute() {
		adminServiceImpl.getRevenueByBusRoute("AtoB");
	}

//	@Test
	@Transactional
	void testGetRevenueByBusOperator() {
		adminServiceImpl.getRevenueByBusOperator("Ravi");
	}

}
