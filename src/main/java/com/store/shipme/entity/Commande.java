package com.store.shipme.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Setter
@Getter
@Entity(name = "commande")
@Table(name = "commande")
public class Commande {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date", nullable = false)
    private Date date;

    @OneToMany(cascade = CascadeType.ALL)
    List<Produits> produits;

    @Column(name = "total_article", scale = 2)
    private float total_article;

    @Column(name = "total_kg", scale = 2, nullable = false)
    private float total_kg;

    @Column(name = "frais", scale = 2)
    private final float frais = 0.02f;

    @Column(name = "commission", scale = 2)
    private float commission;

    @Column(name = "reception", scale = 2, nullable = false)
    private float reception;

    @Column(name = "total", scale = 2)
    private float total;

    public Commande() {
        super();
    }

    public Commande(Date date) {
        this.date = date;
    }

    public Commande(Date date, List<Produits> produits) {
        this.date = date;
        this.produits = produits;
    }

    @PrePersist
    @PreUpdate
    private void calculs() {
        total_article = 0f; total_kg = 0f;
        produits.forEach(produits1 -> {
            total_article += produits1.getPrix_fcfa_total();
            total_kg += produits1.getPoids_total();
        });
        commission = 10000;
        reception = 10000;
        total = total_article + total_kg + commission + reception;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setProduits(List<Produits> produits) {
        this.produits = produits;
    }
}
