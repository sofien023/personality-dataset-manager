package com.sofien.personalitydatasetmanager.Repositories;

import com.sofien.personalitydatasetmanager.Models.PersonalityStructure;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalityRepository extends JpaRepository<PersonalityStructure, Long> {
}
