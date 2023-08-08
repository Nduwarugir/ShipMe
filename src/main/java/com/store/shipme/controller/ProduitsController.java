package com.store.shipme.controller;

import com.store.shipme.entity.Produits;
import com.store.shipme.service.ProduitsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/produits")
public class ProduitsController {

    private final ProduitsService produitsService;

    @Autowired
    public ProduitsController(ProduitsService produitsService) {
        this.produitsService = produitsService;
    }

    @PostMapping(path = "/create")
    public ResponseEntity<String> create(@RequestBody Produits produits) {
        return produitsService.create(produits);
    }

    @PostMapping(path = "/update/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody Produits produits) {
        return produitsService.update(id, produits);
    }

    @PostMapping(path = "/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        return produitsService.delete(id);
    }

    @PostMapping(path = "/read/all")
    public List<Produits> readAll() {
        return produitsService.getAll();
    }
}
