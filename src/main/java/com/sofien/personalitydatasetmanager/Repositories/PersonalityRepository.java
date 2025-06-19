package com.sofien.personalitydatasetmanager.Repositories;

import com.sofien.personalitydatasetmanager.Models.PersonalityStructure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PersonalityRepository extends JpaRepository<PersonalityStructure, Long> {
    @Query(value="SELECT * FROM dataset LIMIT ?1", nativeQuery = true)
    List<PersonalityStructure> findWithLimit(@Param("limit") int limit);
}
