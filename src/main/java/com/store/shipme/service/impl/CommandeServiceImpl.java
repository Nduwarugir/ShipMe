package com.store.shipme.service.impl;

import com.store.shipme.entity.Commande;
import com.store.shipme.repository.CommandeRepository;
import com.store.shipme.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommandeServiceImpl implements CommandeService {

    private final CommandeRepository commandeRepository;

    @Autowired
    public CommandeServiceImpl(CommandeRepository commandeRepository) {
        this.commandeRepository = commandeRepository;
    }

    @Override
    public ResponseEntity<String> create(Commande commande) {
        try {
            if (commande.getProduits().isEmpty()) {
                return new ResponseEntity<>(
                        "Vous devez entrer au moins un produit",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            }
            if (commande.getDate() == null) {
                return new ResponseEntity<>(
                        "Vous devez entrer une date",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            }
            else if (commande.getPrix_euro_total() == 0) {
                return new ResponseEntity<>(
                        "Vous devez entrer un prix en euro",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            }
            else if (commande.getPrix_fcfa_total() == 0) {
                return new ResponseEntity<>(
                        "Vous devez entrer un prix en fcfa",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            }
            else if (commande.getPoids_total() == 0) {
                return new ResponseEntity<>(
                        "Vous devez entrer un poids en Kg",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            }
            else if (commande.getTotal_import() == 0) {
                return new ResponseEntity<>(
                        "Vous devez entrer le total d'importation en fcfa",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            }

            Commande commande1 = commandeRepository.save(commande);
            return new ResponseEntity<>(
                    "Vous avez enregistré une nouvelle commande avec succès: " + commande1,
                    HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(
                    "An exception has occured: "+e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<String> update(Long id, Commande commande) {
        try {
            Optional<Commande> uses = commandeRepository.findById(id);
            if (uses.isEmpty())
                return new ResponseEntity<>(
                        "Products not found.",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            if (commande.getProduits() != null && !uses.get().getProduits().equals(commande.getProduits()))
                uses.get().setProduits(commande.getProduits());

            if (commande.getDate() != null && !uses.get().getDate().equals(commande.getDate()))
                uses.get().setDate(commande.getDate());

            if (commande.getPrix_euro_total() != 0 && uses.get().getPrix_euro_total() != commande.getPrix_euro_total())
                uses.get().setPrix_euro_total(commande.getPrix_euro_total());

            if (commande.getPrix_fcfa_total() != 0 && uses.get().getPrix_fcfa_total() != commande.getPrix_fcfa_total())
                uses.get().setPrix_fcfa_total(commande.getPrix_fcfa_total());

            if (commande.getPoids_total() != 0 && uses.get().getPoids_total() != commande.getPoids_total())
                uses.get().setPoids_total(commande.getPoids_total());

            commandeRepository.saveAndFlush(uses.get());
            return new ResponseEntity<>(
                    "Modification reussie: " + uses.get(),
                    HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(
                    "An exception has occured: "+e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<String> delete(Long id) {
        try {
            commandeRepository.deleteById(id);
            return new ResponseEntity<>(
                    "La commande a bien été supprimée.",
                    HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(
                    "An error has occured: "+e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<String> desactivate(Long id) {
        return null;
    }

    @Override
    public List<Commande> getAll() {
        return commandeRepository.findAll();
    }

    @Override
    public Commande getById(Long id) {
        if (commandeRepository.findById(id).isPresent())
            return commandeRepository.findById(id).get();
        else return null;
    }
}
