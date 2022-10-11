package com.example.rpg.data;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor

@CrossOrigin
@RestController
@RequestMapping(value = "/rpg/accounts", headers = "Accept=application/json")
public class AccountController {
    private AccountRepository accountRepository;

    @GetMapping
    private List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }
}
