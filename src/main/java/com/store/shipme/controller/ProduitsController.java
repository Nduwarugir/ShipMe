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

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody Produits produits) {
        return produitsService.update(id, produits);
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        return produitsService.delete(id);
    }

    @PutMapping(path = "/desactivate/{id}")
    public ResponseEntity<String> desactivate(@PathVariable Long id) {
        return produitsService.desactivate(id);
    }

    @GetMapping(path = "/read/all")
    public List<Produits> readAll() {
        return produitsService.getAll();
    }

    @GetMapping(path = "/read/id/{id}")
    public Produits readById(@PathVariable Long id) {
        return produitsService.getById(id);
    }

}
