package com.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.application.model.Company;
import com.application.services.CompanyService;

@RestController
public class CompanyController {
	
	@Autowired
	private CompanyService companyService;
	
	@GetMapping("/companyslist")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Company>> getAllCompanys() throws Exception
	{
		List<Company> companys = companyService.getAllCompanys();
		return new ResponseEntity<List<Company>>(companys, HttpStatus.OK);
	}
	
	
	@PostMapping("/addCompany")
	@CrossOrigin(origins = "http://localhost:4200")
	public Company addNewCompany(@RequestBody Company company) throws Exception
	{
		Company companyObj = null;
		companyObj = companyService.addNewCompany(company);
		return companyObj;
	}
	
	@GetMapping("/getCompany/{company-id}")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public Company getCompany(@PathVariable("company-id") Integer id) {
		return companyService.getCompany(id);
	}

}
