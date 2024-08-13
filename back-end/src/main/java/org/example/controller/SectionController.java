package org.example.controller;

import org.example.entities.Section;
import org.example.repositories.SectionRepository;
import org.example.service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/sections")
@RestController
public class SectionController {

    @Autowired
    SectionService sectionService;

    @Autowired
    SectionRepository sectionrepo;

    @GetMapping("/all")
    public List<Section> getAllSections(){
        return this.sectionrepo.findAll();
    }

    @PostMapping("/add")
    public Section addSection(@RequestBody Section section) {
        return this.sectionService.addSection(section);
    }

    @DeleteMapping("/{id}")
    public void deleteSection(@PathVariable long id) {
        this.sectionrepo.deleteById(id);;
    }

    @PutMapping("/update/{id}")
    public Section updateSection(@PathVariable long id, @RequestBody Section section) {
        return this.sectionService.updateSection(id,section);
    }
}
