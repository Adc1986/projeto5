package com.example.demo2.dto;

import java.util.Objects;

public class PassagemDTO {
	
	private Long id;
	private String name;
	private String valor;
	
	public PassagemDTO() {
		
	}

	public PassagemDTO(Long id, String name, String valor) {
		super();
		this.id = id;
		this.name = name;
		this.valor = valor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, name, valor);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PassagemDTO other = (PassagemDTO) obj;
		return Objects.equals(id, other.id) && Objects.equals(name, other.name) && Objects.equals(valor, other.valor);
	}

	@Override
	public String toString() {
		return "PassagemDTO [id=" + id + ", nome=" + name + ", valor=" + valor + "]";
	}
	
	

}
