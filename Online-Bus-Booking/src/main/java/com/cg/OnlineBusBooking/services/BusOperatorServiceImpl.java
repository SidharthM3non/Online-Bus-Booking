package com.cg.OnlineBusBooking.services;

import java.time.LocalDate;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.OnlineBusBooking.entities.Booking;
import com.cg.OnlineBusBooking.entities.Bus;
import com.cg.OnlineBusBooking.entities.BusOperator;
import com.cg.OnlineBusBooking.exceptions.BusAlreadyExistException;
import com.cg.OnlineBusBooking.exceptions.BusOperatorAlreadyExistsException;
import com.cg.OnlineBusBooking.exceptions.BusOperatorNotFoundException;
import com.cg.OnlineBusBooking.repositories.IBookingRepository;
import com.cg.OnlineBusBooking.repositories.IBusOperatorRepository;
import com.cg.OnlineBusBooking.repositories.IBusRepository;
import com.cg.OnlineBusBooking.serviceinterfaces.IBusOperatorService;

@Service
public class BusOperatorServiceImpl implements IBusOperatorService{
	
	static final Logger log = 
	        LoggerFactory.getLogger(BusOperatorServiceImpl.class);
	
	//Dependency injections of required repositories
	
	@Autowired
	IBusOperatorRepository busOperatorRepository;
	
	@Autowired
	IBusRepository busRepository;
	
	@Autowired
	IBookingRepository bookingRepository;
	
	//Code start - By Sidharth Menon
	
	//Method to add a Bus into Bus Repository
	@Override
	public void addBus(Bus b) {
		Bus bus = busRepository.findByBusNumber(b.getBusNumber());
		if(bus == null) {
			busRepository.save(b); //In-built function to input/update the value into database
		}
		else {
			throw new BusAlreadyExistException("Bus with following number already exists: " + b.getBusNumber());
		}
	}
	
	//Method to retrieve the revenue generated from a particular Bus Route
	@Override
	public int getRevenueByBusRoute(String routeName){
		int revenue = 0;
		List<Booking> booking = bookingRepository.findByBusRouteRouteName(routeName); //Creating a list of bookings
		for(int i = 0; i < booking.size(); i++) {
			revenue = revenue + booking.get(i).getAmountPaid(); //Fetching the amount paid column from the list to add to revenue
		}
		return revenue;
	}
	
	//Method to retrieve the revenue generated from a particular Bus Route with date
	@Override
	public int getRevenueByBusRouteAndDate(String routeName, LocalDate date){
		int revenue = 0;
		List<Booking> booking = bookingRepository.findByBusRouteRouteNameAndDate(routeName, date); //Creating a list of bookings
		for(int i = 0; i < booking.size(); i++) {
			revenue = revenue + booking.get(i).getAmountPaid(); //Fetching the amount paid column from the list to add to revenue
		}
		return revenue;
	}
	
	//Method to retrieve the monthly revenue generated from a particular Bus Route
	@Override
	public int getMonthlyRevenueByBusRoute(String routeName, String month, String year){
		int monthlyRevenue = 0;
		List<Booking> booking = bookingRepository.findByBusRouteRouteName(routeName); //Creating a list of bookings
		for(int i = 0; i < booking.size(); i++) {
			if(booking.get(i).getDate().getMonthValue() == Integer.parseInt(month) && booking.get(i).getDate().getYear() == Integer.parseInt(year)) //Finding particular month
				monthlyRevenue = monthlyRevenue + booking.get(i).getAmountPaid(); //Fetching the amount paid column from the list to add to revenue
		}
		return monthlyRevenue;
	}
	
	//Code end - By Sidharth Menon
	
	//Code start - By Saurabh Dadhich
	
	//Method to retrieve the yearly revenue generated from a particular Bus Route
	@Override
	public int getYearlyRevenueByBusRoute(String routeName, String year){
		int yearlyRevenue = 0;
		List<Booking> booking = bookingRepository.findByBusRouteRouteName(routeName); //Creating a list of bookings
		for(int i = 0; i < booking.size(); i++) {
			if(booking.get(i).getDate().getYear() == Integer.parseInt(year)) //Finding particular year
				yearlyRevenue = yearlyRevenue + booking.get(i).getAmountPaid(); //Fetching the amount paid column from the list to add to revenue
		}
		return yearlyRevenue;
	}
	
	//Method to add a Bus Operator to the BusOperator Repository
	@Override
	public void addBusOperator(BusOperator busOp) {
		BusOperator busOperator = busOperatorRepository.findByBusOperatorUsername(busOp.getBusOperatorUsername());
		if(busOperator == null) {
			busOperatorRepository.save(busOp); //In-built function to input/update the value into database
		}
		else {
			throw new BusOperatorAlreadyExistsException("Bus Operator with following id already exists: " + busOp.getId());
		}
	}
	
	//Method to update the password of a Bus Operator
	@Override
	public void updatePassword(String oldPassword, String newPassword) {
		BusOperator busOperator = busOperatorRepository.findByPassword(oldPassword);
		busOperator.setPassword(newPassword); //Updating the password using setters
	}

	@Override
	public Bus getAllBusByUsername(String busOperatorUsername) {
		// TODO Auto-generated method stub
		Bus bus = busRepository.findByBusOperatorBusOperatorUsername(busOperatorUsername);
		return bus;
	}
	
	@Override
	public BusOperator getAllBusOperatorByUsernameAndPassword(String busOperatorUsername, String password) {
		BusOperator busOp = busOperatorRepository.findByBusOperatorUsernameAndPassword(busOperatorUsername, password);
		if(busOp==null) {
			throw new BusOperatorNotFoundException("Bus Operator doesn't exist!");
		}
		else {
			return busOp;
		}
	}

	@Override
	public BusOperator getAllBusOperatorByUsername(String busOperatorUsername) {
		BusOperator busOp = busOperatorRepository.findByBusOperatorUsername(busOperatorUsername);
		if(busOp==null) {
			throw new BusOperatorNotFoundException("Bus Operator doesn't exist!");
		}
		else {
			return busOp;
		}
	}
	
	//Code end - By Saurabh Dadhich
	
}
