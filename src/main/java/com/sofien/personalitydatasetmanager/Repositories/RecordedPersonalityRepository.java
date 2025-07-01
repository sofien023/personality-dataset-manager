package com.sofien.personalitydatasetmanager.Repositories;

import com.sofien.personalitydatasetmanager.Models.RecordedPersonalityStructure;
import com.sofien.personalitydatasetmanager.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecordedPersonalityRepository extends JpaRepository<RecordedPersonalityStructure, Long> {
    Optional<RecordedPersonalityStructure> findByUser(User user);

    @Query(value="SELECT * FROM user_dataset LIMIT ?1", nativeQuery = true)
    List<RecordedPersonalityStructure> findWithLimit(@Param("limit") int limit);
}
