package com.example.rpg.web;


import com.example.rpg.data.*;
import lombok.AllArgsConstructor;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@AllArgsConstructor

@CrossOrigin
@RestController
@RequestMapping(value = "/rpg/heros", headers = "Accept=application/json")
public class HeroController {

    HeroRepository heroRepository;
    AccountRepository accountRepository;
    ItemRepository itemRepository;


    // To have nothing equipped, pass an id of 0
    @PutMapping("equipEquipment/weapon{weaponID}/armor{armorID}")
    private void equipEquipment(@PathVariable Long weaponID, @PathVariable Long armorID, OAuth2Authentication auth) {
        Optional<Hero> myHero = heroRepository.findById(accountRepository.findByUsername(auth.getName()).getAccountHero().getId());

        System.out.println("My hero id: " + myHero.get().getId());

        if (weaponID == 0) {
            myHero.get().setEquippedWeapon(null);
        }
        else {
            myHero.get().setEquippedWeapon((Weapon) itemRepository.findById(weaponID).get());
        }

        if (armorID == 0) {
            myHero.get().setEquippedArmor(null);
        }
        else {
            myHero.get().setEquippedArmor((Armor) itemRepository.findById(armorID).get());
        }

        heroRepository.save(myHero.get());


    }
}
