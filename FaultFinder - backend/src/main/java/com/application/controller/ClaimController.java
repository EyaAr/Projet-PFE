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

import com.application.model.Claim;
import com.application.services.ClaimService;

@RestController
public class ClaimController {
	
	@Autowired
	private ClaimService claimService;
	
	@GetMapping("/claimslist")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Claim>> getAllClaims() throws Exception
	{
		List<Claim> claims = claimService.getAllClaims();
		return new ResponseEntity<List<Claim>>(claims, HttpStatus.OK);
	}
	
	@PostMapping("/addClaim")
	@CrossOrigin(origins = "http://localhost:4200")
	public Claim addNewClaim(@RequestBody Claim claim) throws Exception
	{
		Claim claimObj = null;
		claimObj = claimService.addNewClaim(claim);
		return claimObj;
	}
	
	@GetMapping("/getClaim/{claim-id}")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public Claim getClaim(@PathVariable("claim-id") Integer id) {
		return claimService.getClaim(id);
	}
	
}
