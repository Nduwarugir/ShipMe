package com.store.shipme.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
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

    @Column(name = "prix_euro_total", scale = 2)
    private float prix_euro_total;

    @Column(name = "prix_fcfa_total", scale = 2)
    private float prix_fcfa_total;

    @Column(name = "poids_total", scale = 2, nullable = false)
    private float poids_total;

    @Column(name = "total_import", scale = 2, nullable = false)
    private float total_import;

    public Commande() {
        super();
    }

    public Commande(Date date, List<Produits> produits, float prix_euro_total, float prix_fcfa_total, float poids_total, float total_import) {
        this.date = date;
        this.produits = produits;
        this.prix_euro_total = prix_euro_total;
        this.prix_fcfa_total = prix_fcfa_total;
        this.poids_total = poids_total;
        this.total_import = total_import;
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

    public void setPrix_euro_total(float prix_euro_total) {
        this.prix_euro_total = prix_euro_total;
    }

    public void setPrix_fcfa_total(float prix_fcfa_total) {
        this.prix_fcfa_total = prix_fcfa_total;
    }

    public void setPoids_total(float poids_total) {
        this.poids_total = poids_total;
    }

    public void setTotal_import(float total_import) {
        this.total_import = total_import;
    }

    @Override
    public String toString() {
        return "\nCommande: " +
                "\n\tid=" + id +
                ", \n\tdate=" + date +
                ", \n\tproduits=" + produits +
                ", \n\tprix_euro_total=" + prix_euro_total +
                ", \n\tprix_fcfa_total=" + prix_fcfa_total +
                ", \n\tpoids_total=" + poids_total +
                ", \n\ttotal_import=" + total_import +
                '\n';
    }
}
