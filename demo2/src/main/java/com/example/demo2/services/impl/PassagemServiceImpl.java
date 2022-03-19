package com.example.demo2.services.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;

import com.example.demo2.model.entity.Passagem;
import com.example.demo2.repository.PassagemRepository;
import com.example.demo2.services.PassagemService;
@Service
public class PassagemServiceImpl implements PassagemService{
	@Autowired
	private PassagemRepository repository;
	
	public PassagemServiceImpl(PassagemRepository repository) {
		this.repository = repository;
	}

	@Override
	@Transactional
	public Passagem save(Passagem passagem) {
		return repository.save(passagem);
	}

	@Override
	@Transactional
	public Passagem update(Passagem passagem) {
		Objects.requireNonNull(passagem.getId());
		return repository.save(passagem);
	}

	@Override
	@Transactional
	public void delete(Passagem passagem) {
		Objects.requireNonNull(passagem.getId());
		 repository.delete(passagem);
	}

	@Override
	@Transactional
	public List<Passagem> procurar(Passagem passagemFilter) {
		Example example = Example.of(passagemFilter, ExampleMatcher.matching().withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING));
				return repository.findAll(example);
	}

	@Override
	@Transactional
	public Optional<Passagem> obterPorId(Long id) {
		return repository.findById(id);
	}

}
