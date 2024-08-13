package org.example.service;

import org.example.entities.Apprenant;
import org.example.repositories.ApprenantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApprenantService {
    @Autowired
    ApprenantRepository apprenantRepo;

    public Apprenant addApprenant(Apprenant apprenant) {
        return this.apprenantRepo.save(apprenant);
    }

    public List<Apprenant> getAllApprenant(){
        return this.apprenantRepo.findAll();
    }

}
