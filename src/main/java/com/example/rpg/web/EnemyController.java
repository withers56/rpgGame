package com.example.rpg.web;

import com.example.rpg.data.Enemy;
import com.example.rpg.data.EnemyRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@AllArgsConstructor

@CrossOrigin
@RestController
@RequestMapping(value = "/rpg/enemies", headers = "Accept=application/json")
public class EnemyController {

    EnemyRepository enemyRepository;

    @GetMapping
    private Collection<Enemy> getAllEnemies() {
        return enemyRepository.findAll();
    }

    @GetMapping("/enemyById/{enemyId}")
    private Enemy findEnemyById(@PathVariable Long enemyId) {
        return enemyRepository.findById(enemyId).get();
    }
}
