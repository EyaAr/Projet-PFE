package com.application.repository;

import org.springframework.data.repository.CrudRepository;

import com.application.model.Data;

public interface DatabaseRepository extends CrudRepository<Data, Integer> {

}
