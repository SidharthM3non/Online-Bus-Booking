package com.cg.OnlineBusBooking.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

//Entity Creation with annotation
@Entity
public class BusRoute {
	
	//Primary key field
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	
	//fields (or) columns
	String routeName;
	String source;
	String destination;
	
	//bidirectional mapping to Bus table
	@OneToMany(mappedBy = "busRoute", cascade = {CascadeType.ALL})
	List<Bus> bus;
	
	//Non-parameterized constructor
	public BusRoute() {
		super();
	}

	//Parameterized constructor
	public BusRoute(String routeName, String source, String destination) {
		super();
		this.routeName = routeName;
		this.source = source;
		this.destination = destination;
	}

	//Getters and Setters
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRouteName() {
		return routeName;
	}
	public void setRouteName(String routeName) {
		this.routeName = routeName;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	
}
