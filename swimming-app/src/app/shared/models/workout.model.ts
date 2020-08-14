import { WorkoutPart } from './workoutPart.model';

export class Workout {
    constructor(trainerName, week,goalOfTraining,date,workoutParts) {
      this.trainerName = trainerName;
      this.week = week;
      this.goalOfTraining = goalOfTraining;
      this.date = date;
      this.workoutParts = workoutParts;
      let totalDistance =0;
      if(workoutParts){
        workoutParts.forEach(workoutPart=> totalDistance+=workoutPart.totalDistance);
      }
      this.totalDistance = totalDistance;
    }

    trainerName: string ;
    week: number ;
    goalOfTraining: string ;
    date:Date ;
    workoutParts:  Array<WorkoutPart>;
    totalDistance:number;

  }