package com.application.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.application.model.Manager;

public interface ManagerRepository extends CrudRepository<Manager, Integer>
{
    public Manager findByEmail(String email);
    
    public List<Manager> findManagerListByEmail(String email);
	
	public Manager findByManagername(String managername);
	
	public Manager findByEmailAndPassword(String email, String password);
	
	public List<Manager> findProfileByEmail(String email);
	
	@Transactional
	@Modifying
	@Query(value = "update manager set status = 'accept' where email = ?1", nativeQuery = true)
	public void updateStatus(String email);
	
	@Transactional
	@Modifying
	@Query(value = "update manager set status = 'reject' where email = ?1", nativeQuery = true)
	public void rejectStatus(String email);
	
	@Transactional
	@Modifying
	@Query(value = "update manager set status = 'false' where email = ?1", nativeQuery = true)
	public void setStatus(String email);
	
}