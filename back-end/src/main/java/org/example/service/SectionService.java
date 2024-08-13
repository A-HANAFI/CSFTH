package org.example.service;

import org.example.entities.Section;
import org.example.repositories.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectionService {

    @Autowired
    SectionRepository sectionRep;

    public Section addSection(Section section) {
        return this.sectionRep.save(section);
    }

    public List<Section> getAllSection(){
        return this.sectionRep.findAll();
    }

    public Section  updateSection(long id, Section section) {
        section.setId(id);
        return this.sectionRep.save(section);

    }
}
