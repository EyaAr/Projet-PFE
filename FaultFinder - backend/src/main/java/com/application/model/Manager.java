package com.application.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Manager 
{
	@Id
	private   String email;
	private String managername;
	private String managerid;
	private String adresse;
	private String mobile;
	private String gender;
	private String password;
	private String status;
	
	public Manager() 
	{
		super();
	}

	public Manager(String email, String managername, String managerid, String adresse, String mobile, String gender,
			String password, String status) {
		super();
		this.email = email;
		this.managername = managername;
		this.managerid = managerid;
		this.adresse = adresse;
		this.mobile = mobile;
		this.gender = gender;
		this.password = password;
		this.status = status;
	}

	public   String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getManagername() {
		return managername;
	}

	public void setManagername(String managername) {
		this.managername = managername;
	}

	public String getManagerid() {
		return managerid;
	}

	public void setManagerid(String managerid) {
		this.managerid = managerid;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
	
}