package com.cg.OnlineBusBooking.controllers;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.OnlineBusBooking.entities.User;
import com.cg.OnlineBusBooking.serviceinterfaces.IUserService;

@RestController
@RequestMapping(path = "/api/v1/users") //URL specification before every method
public class UserController {
	
	//Dependency Injection
	@Autowired
	IUserService userService;
	
	//REST Method to add a user
	@PostMapping("/")
	@ResponseStatus(HttpStatus.CREATED)
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	
	//REST Method to delete a user
	@DeleteMapping("/delete/{username}")
	@ResponseStatus(HttpStatus.OK)
	public void deleteUser(@PathVariable("username") String username) {
		userService.deleteUser(username);
	}
	
	//REST Method to update users password
	@PutMapping("/update/{username}:{password}")
	@Transactional
	@ResponseStatus(HttpStatus.CREATED)
	public void updateUser(@PathVariable("username") String username, @PathVariable("password") String password) {
		userService.updateUser(username, password);
	}
	
}
