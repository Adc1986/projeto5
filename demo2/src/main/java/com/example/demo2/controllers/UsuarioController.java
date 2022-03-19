package com.example.demo2.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo2.dto.UsuarioDTO;
import com.example.demo2.model.entity.Usuario;
import com.example.demo2.services.UsuarioService;
import com.example.demo2.services.exceptions.NoAuthException;

    @RestController
    @RequestMapping("/api/usuario")
    public class UsuarioController {
	
	private UsuarioService service;
	
	public UsuarioController(UsuarioService service) {
		this.service = service;
	}

    @PostMapping("/autenticacao")
    public ResponseEntity auth(@RequestBody UsuarioDTO dto) {
	 try {
		 Usuario usuarioAuth = service.autenticar(dto.getEmail(), dto.getSenha());
		 return ResponseEntity.ok(usuarioAuth);
	 }
	 catch (NoAuthException e){
		 return ResponseEntity.badRequest().body(e.getMessage());
	 }
}
    @PostMapping
    public ResponseEntity save(@RequestBody UsuarioDTO dto) {
    	
    	Usuario usuario = new Usuario();
    	usuario.setEmail(dto.getEmail());
    	usuario.setNome(dto.getNome());
    	usuario.setSenha(dto.getSenha());
    	
    	try {
    		Usuario usuarioSave = service.salvarUsuario(usuario);
    		return new ResponseEntity(usuarioSave, HttpStatus.CREATED);
    	}
    	catch (Exception e) {
    		return ResponseEntity.badRequest().body(e.getMessage());
    	}
    }
}
