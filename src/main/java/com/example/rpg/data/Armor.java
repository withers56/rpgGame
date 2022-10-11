package com.example.rpg.data;


import lombok.*;
import lombok.experimental.Accessors;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
@DiscriminatorValue("armor")
public class Armor extends Item{
    private Long armorValue;
}
