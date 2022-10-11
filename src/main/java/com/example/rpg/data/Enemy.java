package com.example.rpg.data;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
@Table(name = "enemies")
public class Enemy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Long level;

    @Column(nullable = false)
    private Long maxHp;

    @Column(nullable = false)
    private Long currentHp;

    @Column(nullable = false)
    private Long armorValue;

    @Column(nullable = false)
    private Long accuracy;

    @Column(nullable = false)
    private Long strength;
}
