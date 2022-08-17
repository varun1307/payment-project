package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="bank")
@Entity
public class Bank {
	@Id
	private String bic;
	private String bankName;
	public String getBic() {
		return bic;
	}
	public void setBic(String bic) {
		this.bic = bic;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public Bank() {
		super();
	}
	
	
	
	
}
