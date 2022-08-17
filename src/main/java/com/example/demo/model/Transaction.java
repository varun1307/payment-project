package com.example.demo.model;


import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.springframework.data.annotation.CreatedDate;

@Entity
public class Transaction {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private Integer transactionId;
	
	@ManyToOne
	private CustomerDetails sender;
	
	@ManyToOne
	private Bank bank;
	
	private String receiverAccountHolderName;
	
	private Long receiverAccountNumber;
	
	private String transactionTime;
	
	@ManyToOne
	private TransferType transferType;
	
	@ManyToOne
	private Message messageCode;
	
	private Integer amount;
	private String status;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(Integer transactionId) {
		this.transactionId = transactionId;
	}

	public CustomerDetails getSender() {
		return sender;
	}

	public void setSender(CustomerDetails sender) {
		this.sender = sender;
	}

	public Bank getBank() {
		return bank;
	}

	public void setBank(Bank bank) {
		this.bank = bank;
	}

	public String getReceiverAccountHolderName() {
		return receiverAccountHolderName;
	}

	public void setReceiverAccountHolderName(String receiverAccountHolderName) {
		this.receiverAccountHolderName = receiverAccountHolderName;
	}

	public Long getReceiverAccountNumber() {
		return receiverAccountNumber;
	}

	public void setReceiverAccountNumber(Long receiverAccountNumber) {
		this.receiverAccountNumber = receiverAccountNumber;
	}

	public String getTransactionTime() {
		return transactionTime;
	}

	public void setTransactionTime(String transactionTime) {
		this.transactionTime = transactionTime;
	}

	public TransferType getTransferType() {
		return transferType;
	}

	public void setTransferType(TransferType transferType) {
		this.transferType = transferType;
	}

	public Message getMessageCode() {
		return messageCode;
	}

	public void setMessageCode(Message messageCode) {
		this.messageCode = messageCode;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	
	
	

}
