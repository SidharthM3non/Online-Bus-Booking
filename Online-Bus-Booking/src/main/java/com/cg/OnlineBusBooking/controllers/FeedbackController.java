package com.cg.OnlineBusBooking.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.OnlineBusBooking.entities.BusOperator;
import com.cg.OnlineBusBooking.entities.Feedback;
import com.cg.OnlineBusBooking.serviceinterfaces.IFeedbackService;

@RestController
@RequestMapping(path = "/api/v1/feedbacks") //URL specification before every method
public class FeedbackController {
	
	//Dependency Injection
	@Autowired
	IFeedbackService feedbackService;
	
	//REST Method to add a feedback
	@PostMapping("/")
	@ResponseStatus(HttpStatus.CREATED)
	public Feedback addFeedback(@RequestBody Feedback feedback) {
		return feedbackService.addFeedback(feedback);
	}
	
	//REST Method to view all feedbacks of a specific bus operator with specific route name
	@GetMapping("/routename/{routeName}/")
	@ResponseStatus(HttpStatus.FOUND)
	public List<Feedback> viewAllFeedbacks(@PathVariable String routeName, @RequestBody BusOperator busOperator){
		return feedbackService.viewAllFeedbacks(routeName, busOperator);
	}
	
	//REST Method to view all feedbacks of a specific bus operator
	@GetMapping("/busoperator/")
	@ResponseStatus(HttpStatus.FOUND)
	public List<Feedback> viewAllFeedbacks(@RequestBody BusOperator busOperator){
		return feedbackService.viewAllFeedbacks(busOperator);
	}

}
