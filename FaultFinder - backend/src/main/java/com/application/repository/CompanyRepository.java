package com.application.repository;

import org.springframework.data.repository.CrudRepository;

import com.application.model.Company;

public interface CompanyRepository extends CrudRepository<Company, Integer>  {

}
