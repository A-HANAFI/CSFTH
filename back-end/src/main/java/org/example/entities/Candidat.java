package org.example.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data @NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "candidats", uniqueConstraints = {
        @UniqueConstraint(columnNames = "numCIN")
})

@Inheritance(strategy = InheritanceType.JOINED)
public class Candidat extends User{

    @Column
    private String numCIN;

    @Column
    private LocalDateTime dateNaissance;

    @Column
    private String nomPrenom;

    @Column
    private String nomPere;

    @Column
    private String prenomPere;

    @Column
    private String numTel;

    @Column
    private String adress;
}
