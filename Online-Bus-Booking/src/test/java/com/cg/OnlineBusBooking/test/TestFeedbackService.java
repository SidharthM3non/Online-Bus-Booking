package com.cg.OnlineBusBooking.test;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cg.OnlineBusBooking.entities.BusOperator;
import com.cg.OnlineBusBooking.entities.Feedback;
import com.cg.OnlineBusBooking.serviceinterfaces.IFeedbackService;

@SpringBootTest
class TestFeedbackService {
	
	@Autowired
	IFeedbackService feedbackService;
	
	@Test
	void testAddFeedback() {
		Feedback feedback = new Feedback();
		feedback.setRouteName("AtoB");
		feedback.setUsername("HIJ");
		feedback.setRating(5);
		feedbackService.addFeedback(feedback);
	}

	@Test
	void testViewAllFeedbacksStringBusOperator() {
		BusOperator busOperator = new BusOperator("Ravi","ravipass12",null);
		feedbackService.viewAllFeedbacks("AtoB", busOperator);
	}

	@Test
	void testViewAllFeedbacksBusOperator() {
		BusOperator busOperator = new BusOperator("Ravi","ravipass12",null);
		feedbackService.viewAllFeedbacks(busOperator);
	}

	//@Test
	void testGetAllFeedbacks() {
		feedbackService.getAllFeedbacks();
	}

}
