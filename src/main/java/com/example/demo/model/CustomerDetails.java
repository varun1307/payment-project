package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CustomerDetails")
public class CustomerDetails {
	@Id
	private Long customerId;
	private String accountHolderName;
	private Integer clearBalance;
	private String overDraft;
	
	public Long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}
	public String getAccountHolderName() {
		return accountHolderName;
	}
	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}
	public Integer getClearBalance() {
		return clearBalance;
	}
	public void setClearBalance(Integer clearBalance) {
		this.clearBalance = clearBalance;
	}
	public String getOverDraft() {
		return overDraft;
	}
	public void setOverDraft(String overDraft) {
		this.overDraft = overDraft;
	}
	public CustomerDetails() {
		super();
	}
	
	
	

}
