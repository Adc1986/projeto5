package com.example.demo2.services.exceptions;

public class NoAuthException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NoAuthException(String msg) {
		super(msg);
	}
}
