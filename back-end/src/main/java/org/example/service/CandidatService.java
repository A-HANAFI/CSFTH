package org.example.service;

import org.example.entities.Candidat;
import org.example.repositories.CandidatRepository;
import org.example.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidatService {
    @Autowired
    private CandidatRepository candidatRepo;

    @Autowired
    UserRepository UserEntityRep;


    public Candidat addCandidat(Candidat candidat) {
        //UserEntity UserEntity = this.UserEntityRep.findByUsername(candidat.getUsername());

        return this.candidatRepo.save(candidat);
    }

    public List<Candidat> getAllCandidat() {
        return this.candidatRepo.findAll();
    }

    public void deleteCandidat(long id) {
        this.candidatRepo.deleteById(id);
    }
}
