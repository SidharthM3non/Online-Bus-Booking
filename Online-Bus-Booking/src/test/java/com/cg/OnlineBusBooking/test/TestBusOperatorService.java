package com.cg.OnlineBusBooking.test;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cg.OnlineBusBooking.entities.Bus;
import com.cg.OnlineBusBooking.entities.BusOperator;
import com.cg.OnlineBusBooking.serviceinterfaces.IBusOperatorService;

@SpringBootTest
class TestBusOperatorService {

	@Autowired
	IBusOperatorService busOperatorService;
	
	@Test
	void addBus() {
		Bus b = new Bus("1111", 21, 10);
		busOperatorService.addBus(b);
	}
	
	@Test
	void getRevenueByBusRoute() {
		String routeName = "AtoB";
		busOperatorService.getRevenueByBusRoute(routeName);
	}
	
	@Test
	void getRevenueByBusRouteAndDate() {
		String routeName = "AtoB";
		LocalDate date = LocalDate.parse("2021-03-11");
		busOperatorService.getRevenueByBusRouteAndDate(routeName, date);
	}
	
	@Test
	void getMonthlyRevenueByBusRoute()
	{
		String routeName="AtoB";
		String month="3";
		String year = "2021";
		busOperatorService.getMonthlyRevenueByBusRoute(routeName, month, year);
	}
	
	@Test
	void getYearlyRevenueByBusRoute()
	{
		String routeName="AtoB";
		String year="2021";
		busOperatorService.getYearlyRevenueByBusRoute(routeName, year);
	}
	
//	@Test
	void addBusOperator()
	{
		Bus bus = new Bus("1122",30,15);
		BusOperator busOp=new BusOperator("Sid","123",null, bus);
		busOperatorService.addBusOperator(busOp);
	}
	
	//@Test
	void updatePassword()
	{
		String oldPassword="ravipass12";
		String newPassword="ravipassword";
		busOperatorService.updatePassword(oldPassword, newPassword);
	}
}
