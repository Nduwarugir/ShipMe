package com.store.shipme.service.impl;

import com.store.shipme.entity.Produits;
import com.store.shipme.repository.ProduitsRepository;
import com.store.shipme.service.ProduitsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitsServiceImpl implements ProduitsService {

    private final ProduitsRepository produitsRepository;

    @Autowired
    public ProduitsServiceImpl(ProduitsRepository produitsRepository) {
        this.produitsRepository = produitsRepository;
    }

    @Override
    public ResponseEntity<String> create(Produits produits) {
        Produits produits1 = produitsRepository.save(produits);
        return new ResponseEntity<>(
                "CREATED: " + produits1,
                HttpStatus.CREATED
        );
    }

    @Override
    public ResponseEntity<String> update(Long id, Produits produits) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(Long id) {
        return null;
    }

    @Override
    public List<Produits> getAll() {
        return null;
    }
}
