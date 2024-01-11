package com.store.shipme.controller;

import com.store.shipme.entity.Commande;
import com.store.shipme.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/commandes")
@CrossOrigin("*")
public class CommandeController {

    private final CommandeService commandeService;

    @Autowired
    public CommandeController(CommandeService commandeService) {
        this.commandeService = commandeService;
    }

    @PostMapping(path = "/create")
    public ResponseEntity<String> create(@RequestBody Commande commande) {
        return commandeService.create(commande);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody Commande commande) {
        return commandeService.update(id, commande);
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        return commandeService.delete(id);
    }

    @PutMapping(path = "/desactivate/{id}")
    public ResponseEntity<String> desactivate(@PathVariable Long id) {
        return commandeService.desactivate(id);
    }

    @GetMapping(path = "/read/all")
    public List<Commande> readAll() {
        return commandeService.getAll();
    }

    @GetMapping(path = "/read/id/{id}")
    public Commande readById(@PathVariable Long id) {
        return commandeService.getById(id);
    }

}
