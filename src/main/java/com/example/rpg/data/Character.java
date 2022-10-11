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

    @Column(nullable = false)
    private Long maxHp;

    @Column(nullable = false)
    private Long currentHp;

    @OneToOne
    @JsonIgnoreProperties("bags")
    private Armor equipedArmor;

    @OneToOne
    @JsonIgnoreProperties("bags")
    private Weapon equipedWeapon;

    @OneToOne
    @JsonIgnoreProperties("accountCharacter")
    private Account characterAccount;

    @OneToOne
    @JsonIgnoreProperties("character")
    private Bag bag;
}
