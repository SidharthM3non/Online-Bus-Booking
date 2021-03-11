package com.cg.OnlineBusBooking.controllers;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.OnlineBusBooking.entities.Bus;
import com.cg.OnlineBusBooking.entities.BusOperator;
import com.cg.OnlineBusBooking.serviceinterfaces.IBusOperatorService;

@RestController
@RequestMapping(path = "/api/v1/busoperator") //URL specification before every method
public class BusOperatorController {
	
	//Dependency Injection
	@Autowired
	IBusOperatorService busOperatorService;
	
	
	//REST Method to add a bus
	@PostMapping("/")
	@ResponseStatus(code = HttpStatus.CREATED)
	public void addBus(@RequestBody Bus b) {
		busOperatorService.addBus(b);
	}
	
	//REST Method to add a bus operator
	@PostMapping("/busop/")
	@ResponseStatus(code = HttpStatus.CREATED)
	public void addBusOperator(@RequestBody BusOperator busOp) {
		busOperatorService.addBusOperator(busOp);
	}
	
	//REST Method to find revenue generated from a specific bus route
	@GetMapping("/revenue/{routeName}")
	public ResponseEntity<Integer> getRevenueByBusRoute(@PathVariable String routeName) {
		ResponseEntity<Integer> re = null;
		int revenue = 0;
		Optional<Integer> rev = Optional.of(busOperatorService.getRevenueByBusRoute(routeName));
		if(rev.isPresent()) {
			revenue = rev.get();
			re = new ResponseEntity<Integer>(revenue, HttpStatus.OK);
		}
		else {
			re = new ResponseEntity<Integer>(HttpStatus.NOT_FOUND);
		}
		return re;
	}
		
	//REST Method to find revenue generated from a specific bus route and date
	@GetMapping("/revenue/{routeName}/{date}")
	public ResponseEntity<Integer> getRevenueByBusRouteAndDate(@PathVariable String routeName, @PathVariable String date) {
		ResponseEntity<Integer> re = null;
		int revenue = 0;
		LocalDate date1 = LocalDate.parse(date);
		Optional<Integer> rev = Optional.of(busOperatorService.getRevenueByBusRouteAndDate(routeName, date1));
		if(rev.isPresent()) {
			revenue = rev.get();
			re = new ResponseEntity<Integer>(revenue, HttpStatus.OK);
		}
		else {
			re = new ResponseEntity<Integer>(HttpStatus.NOT_FOUND);
		}
		return re;
	}
	
	//REST Method to find monthly revenue generated from a specific bus route
	@GetMapping("/monthlyrevenue/{routeName}/{month}/{year}")
	public ResponseEntity<Integer> getMonthlyRevenueByBusRoute(@PathVariable String routeName, @PathVariable String month, @PathVariable String year) {
		ResponseEntity<Integer> re = null;
		int revenue = 0;
		Optional<Integer> rev = Optional.of(busOperatorService.getMonthlyRevenueByBusRoute(routeName, month, year));
		if(rev.isPresent()) {
			revenue = rev.get();
			re = new ResponseEntity<Integer>(revenue, HttpStatus.OK);
		}
		else {
			re = new ResponseEntity<Integer>(HttpStatus.NOT_FOUND);
		}
		return re;
	}
	
	//REST Method to find yearly revenue generated from a specific bus route
	@GetMapping("/yearlyrevenue/{routeName}/{year}")
	public ResponseEntity<Integer> getYearlyRevenueByBusRoute(@PathVariable String routeName, @PathVariable String year) {
		ResponseEntity<Integer> re = null;
		int revenue = 0;
		Optional<Integer> rev = Optional.of(busOperatorService.getYearlyRevenueByBusRoute(routeName, year));
		if(rev.isPresent()) {
			revenue = rev.get();
			re = new ResponseEntity<Integer>(revenue, HttpStatus.OK);
		}
		else {
			re = new ResponseEntity<Integer>(HttpStatus.NOT_FOUND);
		}
		return re;
	}
	
}