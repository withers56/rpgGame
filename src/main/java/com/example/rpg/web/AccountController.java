package com.example.rpg.web;

import com.example.rpg.data.*;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor

@CrossOrigin
@RestController
@RequestMapping(value = "/rpg/accounts", headers = "Accept=application/json")
public class AccountController {

    private AccountRepository accountRepository;
    private HeroRepository heroRepository;
    private PasswordEncoder passwordEncoder;
    private BagRepository bagRepository;


    @GetMapping
    private List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    @GetMapping("/me")
    private Account loggedInAccount(OAuth2Authentication auth) {
        String loggedInUsersUsername = auth.getName();

        return accountRepository.findByUsername(loggedInUsersUsername);
    }



    @PostMapping("/register")
    private void registerAccount(@RequestBody Account newAccount) {
        newAccount.setRole(Account.Role.USER);

        String encryptedPassword = passwordEncoder.encode(newAccount.getPassword());
        newAccount.setPassword(encryptedPassword);

        Long accId = accountRepository.saveAndFlush(newAccount).getId();
        System.out.println(accId);

        Optional<Account> myAccount = accountRepository.findById(accId);

        Hero newHero = new Hero();

        newHero.setLevel(1L);
        newHero.setXp(1L);
        newHero.setMaxHp(10L);
        newHero.setCurrentHp(10L);
        newHero.setHeroAccount(myAccount.get());

        Bag newBag = new Bag();
        newBag.setHero(heroRepository.getById(heroRepository.saveAndFlush(newHero).getId()));
        newHero.setBag(bagRepository.findById(bagRepository.saveAndFlush(newBag).getId()).get());

        Long heroId = heroRepository.saveAndFlush(newHero).getId();

        myAccount.get().setAccountHero(heroRepository.findById(heroId).get());

        accountRepository.save(myAccount.get());
    }
}
