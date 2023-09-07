package com.application.repository;

import org.springframework.data.repository.CrudRepository;

import com.application.model.Claim;

public interface ClaimRepository extends CrudRepository<Claim, Integer>{

}
