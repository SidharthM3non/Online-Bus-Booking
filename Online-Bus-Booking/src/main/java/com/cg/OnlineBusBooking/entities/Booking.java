package com.cg.OnlineBusBooking.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

//Entity Creation with annotation
@Entity
public class Booking {
	
	//Primary key field
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	
	//fields (or) columns
	long bookingId;
	String username;
	String busNumber;
	String source;
	String destination;
	int numberOfSeats;
	int amountPaid;
	LocalDate date;
	LocalTime journeyStartTime;
	LocalTime journeyEndTime;
	
	//Unidirectional mapping to User table
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	User user; //many bookings can be done by 1 user  or 1 user can book many bookings
	
	//Unidirectional mapping to BusRoute table
	@ManyToOne(cascade = CascadeType.ALL)
	BusRoute busRoute;
	
	//Unidirectional mapping to Bus table
	@ManyToOne(cascade = CascadeType.ALL)
	Bus bus;
	
	//Non-parameterized constructor
	public Booking() {
		super();
	}

	//Parameterized constructor
	public Booking(long bookingId, String username, String busNumber, String source, String destination,
			int numberOfSeats, int amountPaid, LocalDate date, LocalTime journeyStartTime, LocalTime journeyEndTime,User user,BusRoute busRoute,Bus bus ) {
		super();
		this.bookingId = bookingId;
		this.username = username;
		this.busNumber = busNumber;
		this.source = source;
		this.destination = destination;
		this.numberOfSeats = numberOfSeats;
		this.amountPaid = amountPaid;
		this.date = date;
		this.journeyStartTime = journeyStartTime;
		this.journeyEndTime = journeyEndTime;
		this.user=user;
		this.busRoute=busRoute;
		this.bus=bus;
	}

	//Getters and Setters
	public long getBookingId() {
		return bookingId;
	}
	public void setBookingId(long bookingId) {
		this.bookingId = bookingId;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getBusNumber() {
		return busNumber;
	}
	public void setBusNumber(String busNumber) {
		this.busNumber = busNumber;
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
	public int getNumberOfSeats() {
		return numberOfSeats;
	}
	public void setNumberOfSeats(int numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}
	public int getAmountPaid() {
		return amountPaid;
	}
	public void setAmountPaid(int amountPaid) {
		this.amountPaid = amountPaid;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getJourneyStartTime() {
		return journeyStartTime;
	}
	public void setJourneyStartTime(LocalTime journeyStartTime) {
		this.journeyStartTime = journeyStartTime;
	}
	public LocalTime getJourneyEndTime() {
		return journeyEndTime;
	}
	public void setJourneyEndTime(LocalTime journeyEndTime) {
		this.journeyEndTime = journeyEndTime;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public BusRoute getBusRoute() {
		return busRoute;
	}
	public void setBusRoute(BusRoute busRoute) {
		this.busRoute = busRoute;
	}
	public Bus getBus() {
		return bus;
	}
	public void setBus(Bus bus) {
		this.bus = bus;
	}
	
}
