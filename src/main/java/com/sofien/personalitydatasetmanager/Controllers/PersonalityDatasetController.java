package com.sofien.personalitydatasetmanager.Controllers;

import com.sofien.personalitydatasetmanager.Models.DTO.RecordedPersonalityStructure;
import com.sofien.personalitydatasetmanager.Models.PersonalityStructure;
import com.sofien.personalitydatasetmanager.Models.User;
import com.sofien.personalitydatasetmanager.Repositories.PersonalityRepository;
import com.sofien.personalitydatasetmanager.Repositories.RecordedPersonalityRepository;
import com.sofien.personalitydatasetmanager.Repositories.UserRepository;
import com.sofien.personalitydatasetmanager.Services.PersonalityDatasetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/personality")
class PersonalityDatasetController {
    @Autowired
    private PersonalityRepository personalityRepository;
    @Autowired
    private RecordedPersonalityRepository recordedPersonalityRepository;

    // injection
    private final PersonalityDatasetService personalityDatasetService;
    @Autowired
    private UserRepository userRepository;

    public PersonalityDatasetController(PersonalityDatasetService personalityDatasetService) {
        this.personalityDatasetService = personalityDatasetService;
    }

    @CrossOrigin(origins="*")
    @GetMapping("/get")
    public ResponseEntity<List<PersonalityStructure>> getPersonalityDataset(@RequestParam(required = false) Integer limit) {
        try {

            List<PersonalityStructure> res;
            if (limit != null && limit > 0) {
                res = personalityRepository.findWithLimit(limit);
            } else if (limit != null && limit < 0) {
                return ResponseEntity.noContent().build();
            }

            else res = personalityRepository.findAll();

            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin(origins="*")
    @GetMapping("/get/{id}")
    public ResponseEntity<PersonalityStructure> getPersonalityDatasetById(@PathVariable Long id){
        try {
            Optional<PersonalityStructure> res = Optional.ofNullable(
                    personalityRepository.findById(id).orElseThrow(() -> new  ResponseStatusException(HttpStatus.NOT_FOUND, "No personality found with id " + id))
            );

            return res.map(personalityStructure -> new ResponseEntity<>(personalityStructure, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin(origins="*")
    @PostMapping("/get/user/{id}")
    public ResponseEntity<?> getPersonalityDatasetByUserId(@PathVariable Long id) {
        try {
            Optional<User> res = Optional.ofNullable(
                    userRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "No username exists with that id"))
            );
            if (res.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            Optional<RecordedPersonalityStructure> ress = recordedPersonalityRepository.findByUser(res.get());

            if (ress.isEmpty()) {
                return new ResponseEntity<>("User has no data", HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<>(ress.get(), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin(origins="*")
    @PostMapping("/importcsv")
    public ResponseEntity<?> importCSV(@RequestParam("file") String file) {
        try {
            System.out.println(file);
            List<PersonalityStructure> imported = personalityDatasetService.ImportFromCSV(file);
            personalityRepository.saveAll(imported);
            return new ResponseEntity<>("Successfully imported " + imported.size() + " records", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to import CSV: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin(origins="*")
    @PostMapping("/add-record")
    public ResponseEntity<?> addRecord(@RequestBody RecordedPersonalityStructure personalityStructure) {
        try {
            recordedPersonalityRepository.save(personalityStructure);
            return new ResponseEntity<>("Successfully added record", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add record: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin(origins="*")
    @PutMapping("/modify-record/{id}")
    public ResponseEntity<?> modifyRecord(@RequestBody RecordedPersonalityStructure personalityStructure,
                                          @PathVariable Long id
    ) {
        try {
            Optional<RecordedPersonalityStructure> optional = Optional.ofNullable(
                    recordedPersonalityRepository.findById(id)
                            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND))
            );

            RecordedPersonalityStructure updated = updatePersonalityStructure(personalityStructure, optional);

            recordedPersonalityRepository.save(updated);

            return new ResponseEntity<>("Successfully modified record", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to update record: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin(origins="*")
    @DeleteMapping("/delete-record/{id}")
    public ResponseEntity<?> deleteRecord(@PathVariable Long id) {
        try {
            recordedPersonalityRepository.deleteById(id);
            return new ResponseEntity<>("Successfully deleted record", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete record: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    private static RecordedPersonalityStructure updatePersonalityStructure(RecordedPersonalityStructure personalityStructure, Optional<RecordedPersonalityStructure> optional) {
        RecordedPersonalityStructure updated = optional.get();

        updated.setPersonality(personalityStructure.getPersonality());
        updated.setPostFrequency(personalityStructure.getPostFrequency());
        updated.setFriendsCircleSize(personalityStructure.getFriendsCircleSize());
        updated.setDrainedAfterSocializing(personalityStructure.isDrainedAfterSocializing());
        updated.setGoingOutside(personalityStructure.getGoingOutside());
        updated.setStageFear(personalityStructure.isStageFear());
        updated.setTimeSpentAlone(personalityStructure.getTimeSpentAlone());
        updated.setSocialEventAttendance(personalityStructure.getSocialEventAttendance());

        return updated;
    }

}
