package org.example.controller;

import org.example.entities.User;
import org.example.repositories.UserRepository;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;


    @GetMapping("/all")
   // @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Set<User> getAllUserEntitys(){
        List<User> UserEntitys =  this.userService.getAllUsers();
        Set<User> setUserEntitys = new HashSet<User>(UserEntitys);
        return 	setUserEntitys;
    }

    @PutMapping("/{id}/edit")
    public User editUser(@PathVariable long id, @RequestBody User user) {

        try {
            return this.userRepository.findById(id)
                    .map(saveduser -> {
                        saveduser.setEmail(user.getEmail());
                        saveduser.setUsername(user.getUsername());
                        saveduser.setPassword(user.getPassword());
                        saveduser.setRoles(user.getRoles());
                        return userRepository.save(saveduser);
                    }).orElseGet(() -> {
                        user.setId(id);
                        return userRepository.save(user);
                    });
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
