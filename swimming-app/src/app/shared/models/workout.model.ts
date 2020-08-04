import { WorkoutPart } from './workoutPart.model';

export class Workout {
    constructor(trainerName, week,goalOfTraining,date,WorkoutParts) {
      this.trainerName = trainerName;
      this.week = week;
      this.goalOfTraining = goalOfTraining;
      this.date = date;
      this.workoutParts = WorkoutParts;
    }

    trainerName: string ;
    week: number ;
    goalOfTraining: string ;
    date:Date ;
    workoutParts:  Array<WorkoutPart>;

  }