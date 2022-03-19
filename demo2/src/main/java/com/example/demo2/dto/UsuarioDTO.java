package com.example.demo2.dto;

import java.util.Objects;

public class UsuarioDTO {
	
	private String nome;
	private String email;
	private String senha;
	
	public UsuarioDTO() {
		
	}

	public UsuarioDTO(String nome, String email, String senha) {
		super();
		this.nome = nome;
		this.email = email;
		this.senha = senha;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	@Override
	public int hashCode() {
		return Objects.hash(email, nome, senha);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UsuarioDTO other = (UsuarioDTO) obj;
		return Objects.equals(email, other.email) && Objects.equals(nome, other.nome)
				&& Objects.equals(senha, other.senha);
	}

	@Override
	public String toString() {
		return "UsuarioDTO [nome=" + nome + ", email=" + email + ", senha=" + senha + "]";
	}
	
}
