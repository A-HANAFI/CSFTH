package org.example.controller;

import org.example.entities.Apprenant;
import org.example.service.ApprenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/apprenant")
public class ApprenantController {
    @Autowired
    ApprenantService apprenantService;

    @PostMapping("/add")
    public ResponseEntity<?> addApprenant(@RequestBody Apprenant apprenant) {

        try {
            Apprenant retApprenant =  this.apprenantService.addApprenant(apprenant);
            return ResponseEntity.ok(retApprenant.getNomPrenom() + "est ajouter");
        }catch(ResourceAccessException e) {
            return ResponseEntity.ok(e.getCause());
        }

    }

    @GetMapping("/all")
    public List<Apprenant> getAllApprenant(){
        return this.apprenantService.getAllApprenant();
    }
}
