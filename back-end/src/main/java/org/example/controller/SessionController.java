package org.example.controller;

import org.example.entities.SessionEntity;
import org.example.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/sessions")
@RestController
public class SessionController {

    @Autowired
    SessionService sessionService;


    @PostMapping("/add")
    public SessionEntity addSession(@RequestBody SessionEntity session) {
        return this.sessionService.addSession(session);
    }

    @GetMapping("/all")
    public List<SessionEntity> getAllSessions(){
        return this.sessionService.getAllSessions();
    }

    @GetMapping("/{id}")
    public Optional<SessionEntity> getSession(@PathVariable long id) {
        return this.sessionService.getSession(id);
    }

    @PutMapping("/update/{id}")
    public SessionEntity updateSession(@RequestBody SessionEntity session ,@PathVariable long id ) {
        return this.sessionService.updateSession(session , id );
    }

    @DeleteMapping("/{id}/delete")
    public void deleteSession(@PathVariable long id) {
        this.sessionService.deleteSession(id);
    }
}
