package org.example.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name="sessions",
        schema = "public"
)
public class SessionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;

    @Column
    String annee;

    @Column
    String nomSession;

    @Column
    int capacite;

    @Column
    String dateOuverture;

    @Column
    String dateFermeture;

    @OneToMany
    List<Section> sections;
}
