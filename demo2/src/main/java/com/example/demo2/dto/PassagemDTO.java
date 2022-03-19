package com.example.demo2.dto;

import java.util.Objects;

public class PassagemDTO {
	
	private Long id;
	private String nome;
	private String valor;
	
	public PassagemDTO() {
		
	}

	public PassagemDTO(Long id, String nome, String valor) {
		super();
		this.id = id;
		this.nome = nome;
		this.valor = valor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, nome, valor);
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
		return Objects.equals(id, other.id) && Objects.equals(nome, other.nome) && Objects.equals(valor, other.valor);
	}

	@Override
	public String toString() {
		return "PassagemDTO [id=" + id + ", nome=" + nome + ", valor=" + valor + "]";
	}
	
	

}
