package com.example.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.Repository.BankRepository;
import com.example.demo.Repository.CustomerDetailsRepository;
import com.example.demo.Repository.TransactionRepository;
import com.example.demo.model.Bank;
import com.example.demo.model.CustomerDetails;
import com.example.demo.model.Transaction;
import com.example.demo.model.TransferType;

@Service
public class CustomerDetailsService {
	@Autowired
	private CustomerDetailsRepository customerDetailsRepository;
	@Autowired
	private BankRepository bankRepository;

	public void updateAccountBalance(Long customerId,Integer balance) {
		CustomerDetails customerDetails=customerDetailsRepository.findByCustomerId(customerId);
		customerDetails.setClearBalance(balance);
		customerDetailsRepository.save(customerDetails);
	}
	
	public String getTransferTypeDetailsByName(String name) {
		if(name.startsWith("HDFC")) {
			return "Bank Transfer";
		}
		return "Customer Transfer";
	}

	public String transferIfYes(CustomerDetails sender ,CustomerDetails receiver, Integer amount) {
		Integer senderResultantBalance=sender.getClearBalance()-amount;
		updateAccountBalance(sender.getCustomerId(), senderResultantBalance);
		
		Integer receiverResultantBalance=receiver.getClearBalance()+amount;
		updateAccountBalance(receiver.getCustomerId(), receiverResultantBalance);
		
		return "Transaction of "+ amount +" is successful";
	}
	
	private String transferIfNo(CustomerDetails sender, CustomerDetails receiver, Integer amount) {
		if(sender.getClearBalance()<amount) {
			return "Balance Insufficient";
		}
		Integer senderResultantBalance=sender.getClearBalance()-amount;
		updateAccountBalance(sender.getCustomerId(), senderResultantBalance);
		
		Integer receiverResultantBalance=receiver.getClearBalance()+amount;
		updateAccountBalance(receiver.getCustomerId(), receiverResultantBalance);
		
		return "Transaction of "+ amount +" is successful";
	}
	
	public String accountToAccountTransfer(CustomerDetails sender ,CustomerDetails receiver, Integer amount) {
		CustomerDetails senderBankDetails=customerDetailsRepository.findByCustomerId(sender.getCustomerId());
		CustomerDetails receiverBankDetails=customerDetailsRepository.findByAccountHolderName(receiver.getAccountHolderName());
		String res="";
		if(senderBankDetails.getOverDraft()=="Yes") {
			res=transferIfYes(senderBankDetails,receiverBankDetails,amount);
		}
		else{
			res=transferIfNo(senderBankDetails,receiverBankDetails,amount);
		}
		return res;
	}

	public String makeTransaction(CustomerDetails senderInput, Bank bankInput, String receiverNameInput,
			TransferType transferTypeInput, Integer amount) {
		String res="";
		CustomerDetails senderDetails=customerDetailsRepository.findByCustomerId(senderInput.getCustomerId());
		Bank bankDetails=bankRepository.findByBic(bankInput.getBic());
		
		if(senderDetails.getOverDraft()=="Yes") {
			res=transferIfYesUsingBic(senderDetails,bankDetails,amount);
		}
		else{
			res=transferIfNoUsingBic(senderDetails,bankDetails,amount);
		}
		return res;
		
	}

	private String transferIfNoUsingBic(CustomerDetails senderDetails, Bank bankDetails, Integer amount) {
		if(senderDetails.getClearBalance()<amount) {
			return "Balance Insufficient";
		}
		Integer senderResultantBalance=senderDetails.getClearBalance()-amount;
		updateAccountBalance(senderDetails.getCustomerId(), senderResultantBalance);
		return "Transaction successful";
	}

	private String transferIfYesUsingBic(CustomerDetails senderDetails, Bank bankDetails, Integer amount) {
		Integer senderResultantBalance=senderDetails.getClearBalance()-amount;
		updateAccountBalance(senderDetails.getCustomerId(), senderResultantBalance);
	
		return "Transaction successful";
	}
	


	

}
