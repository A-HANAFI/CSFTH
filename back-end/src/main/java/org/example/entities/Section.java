package org.example.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name="sections")
public class Section {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    long id;

    @Column
    String codeSection;

    @Column
    String codeSpecialite;

    @Column
    String nomSection;

    @Column
    int nombreGroup;

    @Column
    int capaciteApprenant;

    @Column
    String codeDiplome;

    @Column
    String dateEntree;

    @Column
    String dateFin;

    @OneToMany(fetch = FetchType.LAZY)
    List<Apprenant> listApprenant;

    @ManyToOne(fetch = FetchType.LAZY)
    SessionEntity session;
}
