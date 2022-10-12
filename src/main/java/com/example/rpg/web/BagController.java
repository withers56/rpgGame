package com.example.rpg.web;

import com.example.rpg.data.Bag;
import com.example.rpg.data.BagRepository;
import com.example.rpg.data.Item;
import com.example.rpg.data.ItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Column;
import java.util.Collection;

@AllArgsConstructor

@CrossOrigin
@RestController
@RequestMapping(value = "/rpg/bags", headers = "Accept=application/json")
public class BagController {

    private BagRepository bagRepository;
    private ItemRepository itemRepository;

    @PutMapping("addItem/item{itemID}/bag{bagID}")
    private void addItemToBag(@PathVariable Long itemID, @PathVariable Long bagID) {
        Bag bagToAddTo = bagRepository.findById(bagID).get();
        Item itemToAdd = itemRepository.findById(itemID).get();

        Collection<Item> bagsItems = bagToAddTo.getItems();

        bagsItems.add(itemToAdd);

        bagToAddTo.setItems(bagsItems);

        bagRepository.save(bagToAddTo);
    }
}
