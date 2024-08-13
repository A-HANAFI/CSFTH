package org.example.service;

import org.example.entities.User;
import org.example.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
     UserRepository UserEntityRepo;

    public List<User> getAllUsers(){
        return this.UserEntityRepo.findAll();
    }
}
