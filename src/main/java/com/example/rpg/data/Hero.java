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
public class Hero {

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
    private Armor equippedArmor;

    @OneToOne
    @JsonIgnoreProperties("bags")
    private Weapon equippedWeapon;

    @OneToOne
    @JsonIgnoreProperties("accountHero")
    private Account heroAccount;

    @OneToOne
    @JsonIgnoreProperties("hero")
    private Bag bag;
}
