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
