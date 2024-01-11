package com.store.shipme.service;

import com.store.shipme.entity.Commande;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CommandeService {
    ResponseEntity<String> create(Commande commande);
    ResponseEntity<String> update(Long id, Commande commande);
    ResponseEntity<String> delete(Long id);
    ResponseEntity<String> desactivate(Long id);
    List<Commande> getAll();
    Commande getById(Long id);
}
