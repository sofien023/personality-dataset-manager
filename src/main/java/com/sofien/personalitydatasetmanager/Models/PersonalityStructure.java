package com.sofien.personalitydatasetmanager.Models;

import com.sofien.personalitydatasetmanager.Models.Enums.PERSONALITY_TYPE;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Data
@Entity
@Table(name="dataset")
public class PersonalityStructure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int timeSpentAlone;
    private boolean stageFear;
    private int socialEventAttendance;
    private int goingOutside;
    private boolean drainedAfterSocializing;
    private int friendsCircleSize;
    private int postFrequency;
    private PERSONALITY_TYPE personality;

    public PersonalityStructure(int timeSpentAlone, boolean stageFear, int socialEventAttendance, int goingOutside, boolean drainedAfterSocializing, int friendsCircleSize, int postFrequency, PERSONALITY_TYPE personality) {
        this.timeSpentAlone = timeSpentAlone;
        this.stageFear = stageFear;
        this.socialEventAttendance = socialEventAttendance;
        this.goingOutside = goingOutside;
        this.drainedAfterSocializing = drainedAfterSocializing;
        this.friendsCircleSize = friendsCircleSize;
        this.postFrequency = postFrequency;
        this.personality = personality;
    }

    @Override
    public String toString() {
        return "PersonalityStructure{" +
                "id=" + id +
                ", timeSpentAlone=" + timeSpentAlone +
                ", stageFear=" + stageFear +
                ", socialEventAttendance=" + socialEventAttendance +
                ", goingOutside=" + goingOutside +
                ", drainedAfterSocializing=" + drainedAfterSocializing +
                ", friendsCircleSize=" + friendsCircleSize +
                ", postFrequency=" + postFrequency +
                ", personality=" + personality +
                '}';
    }
}
