package org.example.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name="apprenants", uniqueConstraints = {
        @UniqueConstraint(columnNames = "codeInscription")
})
public class Apprenant extends Candidat{

    @Column
    private String codeInscription;

    @ManyToOne
    Section section;
}
