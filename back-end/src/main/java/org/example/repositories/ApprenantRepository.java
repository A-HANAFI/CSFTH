package org.example.repositories;

import org.example.entities.Apprenant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApprenantRepository extends JpaRepository<Apprenant, Long> {
}