package com.example.demo.model;

import jakarta.persistence.*; // for Spring Boot 3
// import javax.persistence.*; // for Spring Boot 2

@Entity // it is a JPA entity and will be mapped to a database table.
@Table(name = "users") // the name of the table in the database ("users").
public class Users {

	// fields representing the properties of a users: id, username, password, and email
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int user_id;

	@Column(name = "username") // @Column to map them to table columns.
	private String username;

	@Column(name = "password")
	private String password;

	@Column(name = "email")
	private String email;

	public Users() {

	}

	public Users(String username, String password, String email) {
		this.username = username;
		this.password = password;
		this.email = email;
	}

	public long getId() {
		return user_id;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Users [user_id=" + user_id + ", username=" + username + ", password=" + password + ", email=" + email + "]";
	}
}