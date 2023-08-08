package com.store.shipme.repository;

import com.store.shipme.entity.Produits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitsRepository extends JpaRepository<Produits, Long> {
}
