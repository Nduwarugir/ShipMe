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
        produits.forEach(produits1 -> {
            total_article += produits1.getPrix_euro()*produits1.getValue_fcfa()*produits1.getQuantity();
            total_kg += produits1.getPoids()*produits1.getQuantity();
        });
        commission = 10000;
        reception = 10000;
        total = total_article + total_kg + commission + reception;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<Produits> getProduits() {
        return produits;
    }

    public void setProduits(List<Produits> produits) {
        this.produits = produits;
    }

    public float getTotal_article() {
        return total_article;
    }

    public void setTotal_article(float total_article) {
        this.total_article = total_article;
    }

    public float getTotal_kg() {
        return total_kg;
    }

    public void setTotal_kg(float total_kg) {
        this.total_kg = total_kg;
    }

    public float getFrais() {
        return frais;
    }

    public float getCommission() {
        return commission;
    }

    public void setCommission(float commission) {
        this.commission = commission;
    }

    public float getReception() {
        return reception;
    }

    public void setReception(float reception) {
        this.reception = reception;
    }

    public float getTotal() {
        return total;
    }

    public void setTotal(float total) {
        this.total = total;
    }

    @Override
    public String toString() {
        return "Commande{" +
                "id=" + id +
                ", date=" + date +
                ", produits=" + produits +
                ", total_article=" + total_article +
                ", total_kg=" + total_kg +
                ", frais=" + frais +
                ", commission=" + commission +
                ", reception=" + reception +
                ", total=" + total +
                '}';
    }
}
