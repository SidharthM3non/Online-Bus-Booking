package com.cg.OnlineBusBooking.services;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.OnlineBusBooking.entities.User;
import com.cg.OnlineBusBooking.exceptions.UserAlreadyExistException;
import com.cg.OnlineBusBooking.exceptions.UserNotFoundException;
import com.cg.OnlineBusBooking.repositories.IUserRepository;
import com.cg.OnlineBusBooking.serviceinterfaces.IUserService;

//Code start - By Sagar KC

@Service
public class UserServiceImpl implements IUserService {
	
	static final Logger log = 
	        LoggerFactory.getLogger(UserServiceImpl.class);

	//Dependency injections of required repositories
	
	@Autowired
	IUserRepository userRepository;
	
	//Method to add a user
	@Override
	public void addUser(User user) {
		Optional<User> u = userRepository.findByUsername(user.getUsername());
		if(u.isPresent()) {
			throw new UserAlreadyExistException("User already exists!!!");
		} else {
			userRepository.save(user);
		}
	}
	
	//Method to delete a user
	@Override
	public void deleteUser(String username) {
		User newUser = null;
		Optional<User> u =userRepository.findByUsername(username);
		if(u.isPresent()) {
			newUser = u.get();
			userRepository.delete(newUser);
		} else {
			throw new UserNotFoundException("User with username "+username+" does not exist");
		}
	}
	
	//Method to update a users password
	@Override
	public void updateUser(String username, String password) {
		User newUser = null;
		Optional<User> u =userRepository.findByUsername(username);
		if(u.isPresent()) {
			newUser = u.get();
			newUser.setPassword(password);
		} else {
			throw new UserNotFoundException("User with username "+username+" does not exist");
		}
	}
	
	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public User findUser(String username) {
		// TODO Auto-generated method stub
		Optional<User> u = userRepository.findByUsername(username);
		User user = null;
		if(u.isPresent()) {
			user = u.get();
		}
		return user;
		
	}
	
	@Override
	public User findUserByUsernameAndPassword(String username, String password) {
		// TODO Auto-generated method stub
		User u = userRepository.findByUsernameAndPassword(username, password);
		if(u == null) {
			throw new UserNotFoundException("User does not exist");
		}
		else {
			return u;
		}	
	}
	
//Code end - By Sagar KC	
}
