package com.example.demo.model;

public class Transfer {
	
	private CustomerDetails sender;
	private CustomerDetails receiver;
	private Integer amount;
	
	public CustomerDetails getSender() {
		return sender;
	}
	public void setSender(CustomerDetails sender) {
		this.sender = sender;
	}
	public CustomerDetails getReceiver() {
		return receiver;
	}
	public void setReceiver(CustomerDetails receiver) {
		this.receiver = receiver;
	}
	public Integer getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	public Transfer() {
		super();
	}
	

}
