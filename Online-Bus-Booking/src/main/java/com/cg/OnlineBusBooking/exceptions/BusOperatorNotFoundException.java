package com.cg.OnlineBusBooking.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//Http Status at input time to confirm what the issue is
@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class BusOperatorNotFoundException extends RuntimeException {
	
	public BusOperatorNotFoundException() {
		
	}
	
	public BusOperatorNotFoundException(String message) {
		super(message);
	}
	
}