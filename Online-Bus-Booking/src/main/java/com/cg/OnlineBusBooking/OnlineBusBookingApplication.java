package com.cg.OnlineBusBooking;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OnlineBusBookingApplication {

	static final Logger log = 
	        LoggerFactory.getLogger(OnlineBusBookingApplication.class);
	
	public static void main(String[] args) {
		log.info("Before Starting application");
		SpringApplication.run(OnlineBusBookingApplication.class, args);
		
		log.debug("Starting my application in debug with {} args", args.length);
		log.info("Starting my application with {} args.", args.length);
	}

}
