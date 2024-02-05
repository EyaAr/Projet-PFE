package com.application.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Claim {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String title;
	private String description;
	private String dateClaim;
	
	public Claim() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Claim(int id, String title, String description, String dateClaim) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.dateClaim = dateClaim;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDateClaim() {
		return dateClaim;
	}

	public void setDateClaim(String dateClaim) {
		this.dateClaim = dateClaim;
	}
	
	
	
	

}
