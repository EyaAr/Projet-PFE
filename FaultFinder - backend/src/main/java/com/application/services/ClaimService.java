package com.application.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.model.Claim;
import com.application.repository.ClaimRepository;
import java.util.List;

@Service
public class ClaimService {
	
	@Autowired
	private ClaimRepository claimRepo;
	
	public Claim addNewClaim(Claim claim) {
		return claimRepo.save(claim);
	}
	
	public List<Claim> getAllClaims(){
		return (List<Claim>)claimRepo.findAll();
	}
	
	public Claim getClaim(Integer id) {
		return claimRepo.findById(id).orElse(null);
	}
	

}
