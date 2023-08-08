package com.store.shipme.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "produits")
@Table(name = "produits")
public class Produits {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "label", length = 50, nullable = false)
    private String label;

    @Column(name = "tag", length = 50)
    private String tag;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "prix_euro", scale = 2, nullable = false)
    private float prix_euro;

    @Column(name = "prix_euro_total", scale = 2)
    private float prix_euro_total;

    @Column(name = "prix_fcfa", scale = 2)
    private float prix_fcfa;

    @Column(name = "prix_fcfa_total", scale = 2)
    private float prix_fcfa_total;

    @Column(name = "poids", scale = 2, nullable = false)
    private float poids;

    @Column(name = "poids_total", scale = 2)
    private float poids_total;

    @Column(name = "value_fcfa", scale = 2)
    private final float value_fcfa = 700;

    public Produits() {
        super();
    }

    public Produits(String label, String tag, int quantity, float prix_euro, float prix_euro_total, float prix_fcfa, float prix_fcfa_total, float poids, float poids_total) {
        this.label = label;
        this.tag = tag;
        this.quantity = quantity;
        this.prix_euro = prix_euro;
        this.prix_euro_total = prix_euro_total;
        this.prix_fcfa = prix_fcfa;
        this.prix_fcfa_total = prix_fcfa_total;
        this.poids = poids;
        this.poids_total = poids_total;
    }

    @PrePersist
    @PreUpdate
    private void calculPrices() {
        prix_euro_total = prix_euro * quantity;
        prix_fcfa = prix_euro * value_fcfa;
        prix_fcfa_total = prix_euro_total * value_fcfa;
        poids_total = poids * quantity;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setPrix_euro(float prix_euro) {
        this.prix_euro = prix_euro;
    }

    public void setPrix_euro_total(float prix_euro_total) {
        this.prix_euro_total = prix_euro_total;
    }

    public void setPrix_fcfa(float prix_fcfa) {
        this.prix_fcfa = prix_fcfa;
    }

    public void setPrix_fcfa_total(float prix_fcfa_total) {
        this.prix_fcfa_total = prix_fcfa_total;
    }

    public void setPoids(float poids) {
        this.poids = poids;
    }

    public void setPoids_total(float poids_total) {
        this.poids_total = poids_total;
    }

    @Override
    public String toString() {
        return "Produits{" +
                "id=" + id +
                ", label='" + label + '\'' +
                ", tag='" + tag + '\'' +
                ", quantity=" + quantity +
                ", prix_euro=" + prix_euro +
                ", prix_euro_total=" + prix_euro_total +
                ", prix_fcfa=" + prix_fcfa +
                ", prix_fcfa_total=" + prix_fcfa_total +
                ", poids=" + poids +
                ", poids_total=" + poids_total +
                '}';
    }
}
