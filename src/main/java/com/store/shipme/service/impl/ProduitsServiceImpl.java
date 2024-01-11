package com.store.shipme.service.impl;

import com.store.shipme.entity.Produits;
import com.store.shipme.repository.ProduitsRepository;
import com.store.shipme.service.ProduitsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProduitsServiceImpl implements ProduitsService {

    private final ProduitsRepository produitsRepository;

    @Autowired
    public ProduitsServiceImpl(ProduitsRepository produitsRepository) {
        this.produitsRepository = produitsRepository;
    }

    @Override
    public ResponseEntity<String> create(Produits produits) {
        try {
            if (produits.getLabel() == null) {
                return new ResponseEntity<>(
                        "Vous devez entrer un label",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            }
            else if (produits.getQuantity() == 0) {
                return new ResponseEntity<>(
                        "Vous devez entrer une quantité",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            }
            else if (produits.getPrix_euro() == 0) {
                return new ResponseEntity<>(
                        "Vous devez entrer un prix en euro",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            }
            else if (produits.getPoids() == 0) {
                return new ResponseEntity<>(
                        "Vous devez entrer un poids en Kg",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500
            }

            Produits produits1 = produitsRepository.save(produits);
            return new ResponseEntity<>(
                    "Vous avez enregistré un nouveau produit avec succès: " + produits1,
                    HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(
                    "An exception has occured: "+e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<String> update(Long id, Produits produits) {
        try {
            Optional<Produits> uses = produitsRepository.findById(id);
            if (uses.isEmpty())
                return new ResponseEntity<>(
                        "Products not found.",
                        HttpStatus.INTERNAL_SERVER_ERROR);//renvoie une erreur 500

            if (produits.getLabel() != null && !uses.get().getLabel().equals(produits.getLabel()))
                uses.get().setLabel(produits.getLabel());

            if (produits.getTag() != null && !uses.get().getTag().equals(produits.getTag()))
                uses.get().setTag(produits.getTag());

            if (produits.getQuantity() != 0 && uses.get().getQuantity() != produits.getQuantity())
                uses.get().setQuantity(produits.getQuantity());

            if (produits.getPrix_euro() != 0 && uses.get().getPrix_euro() != produits.getPrix_euro())
                uses.get().setPrix_euro(produits.getPrix_euro());

            if (produits.getPrix_fcfa() != 0 && uses.get().getPrix_fcfa() != produits.getPrix_fcfa())
                uses.get().setPrix_fcfa(produits.getPrix_fcfa());

            if (produits.getPoids() != 0 && uses.get().getPoids() != produits.getPoids())
                uses.get().setPoids(produits.getPoids());

            produitsRepository.saveAndFlush(uses.get());
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
            produitsRepository.deleteById(id);
            return new ResponseEntity<>(
                    "Le produit a bien été supprimée.",
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
    public List<Produits> getAll() {
        return produitsRepository.findAll();
    }

    @Override
    public Produits getById(Long id) {
        if (produitsRepository.findById(id).isPresent())
            return produitsRepository.findById(id).get();
        else return null;
    }
}
