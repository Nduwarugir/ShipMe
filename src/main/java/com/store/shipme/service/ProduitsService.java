package com.store.shipme.service.impl;

import com.store.shipme.entity.Produits;
import org.springframework.http.ResponseEntity;

public interface ProduitsService {
    ResponseEntity<String> create(Produits produits);
}
