package com.example.demo2.services.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo2.model.entity.Usuario;
import com.example.demo2.repository.UsuarioRepository;
import com.example.demo2.services.UsuarioService;
import com.example.demo2.services.exceptions.NoAuthException;
import com.example.demo2.services.exceptions.ValidarException;

@Service
public class UsuarioServiceImpl implements UsuarioService {
	
	@Autowired
	private UsuarioRepository repository;
	
	public UsuarioServiceImpl(UsuarioRepository repository) {
		super();
		this.repository = repository;
	}

	@Override
	public Usuario autenticar(String email, String senha) {
		Optional<Usuario> usuario = repository.findByEmail(email);
		
		if(!usuario.isPresent()) {
			throw new NoAuthException("usuario não encontrado");
		}
		if(!usuario.get().getSenha().equals(senha)) {
			throw new NoAuthException("senha incorreta");
		}
		return usuario.get();
	}

	@Override
	public Usuario salvarUsuario(Usuario usuario) {
		validarEmail(usuario.getEmail());
		return repository.save(usuario);
	}

	@Override
	public void validarEmail(String email) {
		boolean exists = repository.existsByEmail(email);
		if(exists) {
			throw new ValidarException("usuario existente");
		}
		
	}

}
