package com.example.demo2.services;

import java.util.List;
import java.util.Optional;

import com.example.demo2.model.entity.Passagem;

public interface PassagemService {
	
	Passagem save(Passagem passagem);
	
	Passagem update(Passagem passagem);
	
	void delete(Passagem passagem);
	
	List<Passagem> procurar(Passagem passagemFilter);
	
	Optional<Passagem> obterPorId(Long id);

}
