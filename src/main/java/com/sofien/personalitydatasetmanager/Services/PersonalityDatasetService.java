package com.sofien.personalitydatasetmanager.Services;

import org.springframework.stereotype.Service;

@Service
public class PersonalityDatasetService {
//    public List<RecordedPersonalityStructure> ImportFromCSV(String filePath) {
//        List<RecordedPersonalityStructure> result = new ArrayList<>();
//        try (FileReader fr = new FileReader(filePath)) {
//            CSVReader csvReader = new CSVReader(fr);
//
//            String[] line = csvReader.readNext();
//
//            while ((line = csvReader.readNext()) != null) {
//                RecordedPersonalityStructure personalityStructure = getRecordedPersonalityStructure(line);
//                result.add(personalityStructure);
//
//            }
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        } catch (CsvValidationException e) {
//            throw new RuntimeException(e);
//        }
//
//        return result;
//    }
//
//    private static RecordedPersonalityStructure getRecordedPersonalityStructure(String[] data) {
//        for (int i = 0; i< data.length; i++){
//            System.out.println(data[i]);
//        }
//        RecordedPersonalityStructure personalityStructure = new RecordedPersonalityStructure(
//                data[0].isEmpty() ? 0 : (int)Double.parseDouble(data[0]),
//                !data[1].isEmpty() && Objects.equals(data[1].toLowerCase(), "yes"),
//                data[2].isEmpty() ? 0 : (int)Double.parseDouble(data[2]),
//                data[3].isEmpty() ? 0 :(int)Double.parseDouble(data[3]),
//                !data[4].isEmpty() && Objects.equals(data[4].toLowerCase(), "yes"),
//                data[5].isEmpty() ? 0 :(int)Double.parseDouble(data[5]),
//                data[6].isEmpty() ? 0 : (int)Double.parseDouble(data[6]),
//                data[7].isEmpty() ? PERSONALITY_TYPE.EXTROVERT : Objects.equals(data[7].toLowerCase(), "introvert") ? PERSONALITY_TYPE.INTROVERT : PERSONALITY_TYPE.EXTROVERT,
//                null
//        );
//
//        System.out.println(personalityStructure.getGoingOutside());
//        return personalityStructure;
//    }
}
