package com.application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.model.Company;
import com.application.repository.CompanyRepository;

@Service
public class CompanyService {
	
	@Autowired
	private CompanyRepository companyRepo;
	
	public Company addNewCompany(Company company) {
		return companyRepo.save(company);
	}
	
	public List<Company>getAllCompanys(){
		return (List<Company>)companyRepo.findAll();
	}
	
	public Company getCompany(Integer id) {
		return companyRepo.findById(id).orElse(null);
	}
	
	

}
