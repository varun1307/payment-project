package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="transferType")
@Entity

public class TransferType {
	@Id
	private String transferTypeCode;
	private String transferTypeDescription;
	
	public String getTransferTypeCode() {
		return transferTypeCode;
	}
	public void setTransferTypeCode(String transferTypeCode) {
		this.transferTypeCode = transferTypeCode;
	}
	public String getTransferTypeDescription() {
		return transferTypeDescription;
	}
	public void setTransferTypeDescription(String transferTypeDescription) {
		this.transferTypeDescription = transferTypeDescription;
	}

}
