package com.example.demo.model;

import java.util.Date;

public class TransactionDto {
	
	private CustomerDetails sender;
	
	private Bank bank;
	
	private String receiverAccountHolderName;
	
	private Long receiverAccountNumber;
	
    private TransferType transferType;
    
	private Message messageCode;
	
	private Integer amount;
	
	private Date transactionDate;

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

	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}

	public TransactionDto() {
		super();
	}

	public TransactionDto(Transaction transaction) {
		this.setSender(transaction.getSender());
		this.setAmount(transaction.getAmount());
		this.setBank(transaction.getBank());
		this.setMessageCode(transaction.getMessageCode());
		this.setReceiverAccountHolderName(transaction.getReceiverAccountHolderName());
		this.setReceiverAccountNumber(transaction.getReceiverAccountNumber());
		this.setTransferType(transaction.getTransferType());
		this.setTransactionDate(new Date());
	
	}
	
	

	
}
