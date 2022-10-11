package com.example.rpg.data;

import lombok.*;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
@DiscriminatorValue("weapon")
public class Weapon extends Item{

    private Long accuracy;

    private Long strength;
}
