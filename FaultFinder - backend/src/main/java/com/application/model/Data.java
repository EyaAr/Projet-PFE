package com.application.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Data {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String url;
	private String username;
	private String password;
	public Data() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Data(int id, String url, String username, String password) {
		super();
		this.id = id;
		this.url = url;
		this.username = username;
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
