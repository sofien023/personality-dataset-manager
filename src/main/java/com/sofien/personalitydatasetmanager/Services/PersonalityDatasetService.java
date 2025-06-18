package com.sofien.personalitydatasetmanager.Services;

import com.opencsv.CSVParser;
import com.opencsv.CSVParserBuilder;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.exceptions.CsvValidationException;
import com.sofien.personalitydatasetmanager.Models.Enums.PERSONALITY_TYPE;
import com.sofien.personalitydatasetmanager.Models.PersonalityStructure;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.logging.Logger;
import java.util.stream.IntStream;

@Service
public class PersonalityDatasetService {
    public List<PersonalityStructure> ImportFromCSV(String filePath) {
        List<PersonalityStructure> result = new ArrayList<>();
        try (FileReader fr = new FileReader(filePath)) {
            CSVReader csvReader = new CSVReader(fr);

            String[] line = csvReader.readNext();

            while ((line = csvReader.readNext()) != null) {
                PersonalityStructure personalityStructure = getPersonalityStructure(line);
                result.add(personalityStructure);

            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (CsvValidationException e) {
            throw new RuntimeException(e);
        }

        return result;
    }

    private static PersonalityStructure getPersonalityStructure(String[] data) {
        for (int i = 0; i< data.length; i++){
            System.out.println(data[i]);
        }
        PersonalityStructure personalityStructure = new PersonalityStructure(
                data[0].isEmpty() ? 0 : (int)Double.parseDouble(data[0]),
                !data[1].isEmpty() && Objects.equals(data[1].toLowerCase(), "yes"),
                data[2].isEmpty() ? 0 : (int)Double.parseDouble(data[2]),
                data[3].isEmpty() ? 0 :(int)Double.parseDouble(data[3]),
                !data[4].isEmpty() && Objects.equals(data[4].toLowerCase(), "yes"),
                data[5].isEmpty() ? 0 :(int)Double.parseDouble(data[5]),
                data[6].isEmpty() ? 0 : (int)Double.parseDouble(data[6]),
                data[7].isEmpty() ? PERSONALITY_TYPE.EXTROVERT : Objects.equals(data[7].toLowerCase(), "introvert") ? PERSONALITY_TYPE.INTROVERT : PERSONALITY_TYPE.EXTROVERT
        );

        System.out.println(personalityStructure.getGoingOutside());
        return personalityStructure;
    }
}
