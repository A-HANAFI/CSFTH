package org.example.service;

import org.example.entities.SessionEntity;
import org.example.repositories.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SessionService {

    @Autowired
    SessionRepository sessionRepository;

    public SessionEntity  addSession(SessionEntity session) {
        return this.sessionRepository.save(session);
    }

    public SessionEntity updateSession(SessionEntity sessionent ,long id ) {
        sessionent.setId(id);
        return this.sessionRepository.save(sessionent);
    }

    public Optional<SessionEntity> getSession(long id) {
        return this.sessionRepository.findById(id);
    }

    public void deleteSession(long id) {
        this.sessionRepository.deleteById(id);
    }

    public List<SessionEntity> getAllSessions(){
        return this.sessionRepository.findAll();
    }



    public SessionService(SessionRepository sessionRepository) {
        super();
        this.sessionRepository = sessionRepository;
    }

    public SessionRepository getSessionRepository() {
        return sessionRepository;
    }

    public void setSessionRepository(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

}
