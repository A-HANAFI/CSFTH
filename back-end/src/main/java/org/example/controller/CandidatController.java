package org.example.controller;

import org.example.entities.Candidat;
import org.example.paylod.response.MessageResponse;
import org.example.repositories.UserRepository;
import org.example.service.CandidatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/candidat")
@RestController
public class CandidatController {
    @Autowired
    CandidatService candidatService;

    @Autowired
    UserRepository UserEntityRepository;

    @PostMapping("/add")
    public ResponseEntity<?> addCandidat(@RequestBody Candidat candidat) {

        try {
            this.UserEntityRepository.deleteById(candidat.getId());
            Candidat retcandidat = this.candidatService.addCandidat(candidat);
            return ResponseEntity.ok(retcandidat.getNomPrenom().toString() + "est ajouter");
        }catch(AuthenticationException e) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: " + e.getMessage()));
        }
    }

    @GetMapping("/all")
    public List<Candidat> getAllCandidat(){
        return this.candidatService.getAllCandidat();
    }

    @DeleteMapping("/{id}")
    public void deleteCandidat(@PathVariable long id) {
        this.candidatService.deleteCandidat(id);
    }

}
