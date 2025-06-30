package com.sofien.personalitydatasetmanager.Repositories;

import com.sofien.personalitydatasetmanager.Models.DTO.RecordedPersonalityStructure;
import com.sofien.personalitydatasetmanager.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecordedPersonalityRepository extends JpaRepository<RecordedPersonalityStructure, Long> {
    Optional<RecordedPersonalityStructure> findByUser(User user);
}
