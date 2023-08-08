package com.store.shipme.service.impl;

import com.store.shipme.entity.Commande;
import com.store.shipme.repository.CommandeRepository;
import com.store.shipme.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandeServiceImpl implements CommandeService {

    private final CommandeRepository commandeRepository;

    @Autowired
    public CommandeServiceImpl(CommandeRepository commandeRepository) {
        this.commandeRepository = commandeRepository;
    }


    @Override
    public ResponseEntity<String> create(Commande commande) {
        return null;
    }

    @Override
    public ResponseEntity<String> update(Long id, Commande commande) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(Long id) {
        return null;
    }

    @Override
    public List<Commande> getAll() {
        return null;
    }
}
