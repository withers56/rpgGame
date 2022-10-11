package com.example.rpg.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
@Table(name = "characters")
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long xp;

    @Column(nullable = false)
    private Long level;

    @OneToOne
    @JsonIgnoreProperties("accountCharacter")
    private Account characterAccount;
}
