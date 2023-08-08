package com.store.shipme.service;

import com.store.shipme.entity.Produits;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProduitsService {
    ResponseEntity<String> create(Produits produits);
    ResponseEntity<String> update(Long id,Produits produits);
    ResponseEntity<String> delete(Long id);
    List<Produits> getAll();
}
