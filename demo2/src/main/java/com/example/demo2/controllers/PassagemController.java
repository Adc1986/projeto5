package com.example.demo2.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo2.dto.PassagemDTO;
import com.example.demo2.model.entity.Passagem;
import com.example.demo2.services.PassagemService;
import com.example.demo2.services.exceptions.ValidarException;

@CrossOrigin(origins = "localhoost:3000")
@RestController
@RequestMapping("/api/passagem")
public class PassagemController {
	
	private PassagemService service;
	
	public PassagemController (PassagemService service) {
		this.service = service;
	}
 
    @GetMapping
    public ResponseEntity search(
@RequestParam(value="name", required= false)String name,
@RequestParam(value="valor", required= false)String valor
) {
	Passagem passagemFilter = new Passagem();
	passagemFilter.setName(name);
	passagemFilter.setValor(valor);
	
	List<Passagem> passagem = service.procurar(passagemFilter);
	return ResponseEntity.ok(passagem);
    }
	
	@PostMapping
	public ResponseEntity save (@RequestBody PassagemDTO dto) {
		try {
			Passagem entity = converter(dto);
			entity = service.save(entity);
			return ResponseEntity.ok(entity);
		}
		catch(ValidarException e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	@PutMapping("/{id}")
	public ResponseEntity update(@PathVariable Long id,@RequestBody PassagemDTO dto) {
		return service.obterPorId(id).map( entity ->{
			try {
				Passagem passagem = converter(dto);
				passagem.setId(entity.getId());
				service.update(passagem);
				return ResponseEntity.ok(passagem);
			}
			catch (Exception e) {
                return ResponseEntity.badRequest().body(null);
            }
			
		}).orElseGet(() -> new ResponseEntity("Passagem não encontrada", HttpStatus.BAD_REQUEST));
			
	}
	@DeleteMapping("/{id}")
	public ResponseEntity delete(@PathVariable("id") Long id) {
		return service.obterPorId(id).map( entity ->{
			service.delete(entity);
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			
		}).orElseGet(() -> new ResponseEntity("Passagem não encontrada", HttpStatus.BAD_REQUEST));
				
				}
	private Passagem converter(PassagemDTO dto) {
		Passagem passagem = new Passagem();
		passagem.setName(dto.getNome());
		passagem.setValor(dto.getValor());
		
		return passagem;
		
		}
}
