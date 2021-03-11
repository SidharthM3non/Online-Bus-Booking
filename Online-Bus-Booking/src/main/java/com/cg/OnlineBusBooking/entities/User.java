package com.cg.OnlineBusBooking.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//Entity Creation with annotation
@Entity
@Table(name = "user_info") //Postgre does not allow a table to be called User
public class User {
	
	//Primary key field
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	
	//fields (or) columns
	String username;
	String password;
	
	//Non-parameterized constructor
	public User() {
		super();
	}
	
	//Parameterized constructor
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	//Getters and Setters
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id=id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
