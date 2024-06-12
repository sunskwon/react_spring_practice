package com.nowhere.be.controller;

import com.nowhere.be.model.dto.MenuDTO;
import com.nowhere.be.model.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;

@RestController
public class MenuController {

    private MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping("/menus")
    public ResponseEntity<Map<String, Object>> selectAllMenus() {

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));

        Map<String, Object> result = new HashMap<>();
        result.put("menus", menuService.selectAllMenus());

        System.out.println("select all menus");

        return new ResponseEntity<>(result, headers, HttpStatus.OK);
    }

    @GetMapping("/menus/{menuCode}")
    public ResponseEntity<Map<String, Object>> selectMenuByCode(@PathVariable int menuCode) {

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));

        Map<String, Object> result = new HashMap<>();
        result.put("menu", menuService.selectMenuByCode(menuCode));

        System.out.println("select menu by code");

        return new ResponseEntity<>(result, headers, HttpStatus.OK);
    }

    @PostMapping("/menus")
    public ResponseEntity<?> insertMenu(@RequestBody MenuDTO menu) {

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));

        int newMenuCode = menuService.getLastMenuCode() + 1;

        Map<String, Object> result = new HashMap<>();
        result.put("menuCode", newMenuCode);

        menu.setMenuCode(newMenuCode);

        menuService.insertMenu(menu);

        System.out.println("insert menu");

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .headers(headers)
                .body(newMenuCode);
    }

    @PutMapping("/menus")
    public ResponseEntity<?> updateMenu(@RequestBody MenuDTO menu) {

        System.out.println(menu);

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));

        menuService.updateMenu(menu);

        System.out.println("update menu");

        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .headers(headers)
                .body(menu.getMenuCode());
    }

    @DeleteMapping("/menus/{menuCode}")
    public ResponseEntity<?> deleteMenu(@PathVariable int menuCode) {

        menuService.deleteMenu(menuCode);

        System.out.println("delete menu");

        return ResponseEntity.noContent().build();
    }
}
