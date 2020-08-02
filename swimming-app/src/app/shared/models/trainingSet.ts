import {WorkoutSet} from "./workoutset";

export class TrainingSet {
    id:number
    workoutSet:WorkoutSet
    Parts_of_the_training:Array<WorkoutSet>;
  }



  // export class Exercise {
  //   constructor(repetition, distance,description,exerciseSets) {
  //     this.repetition = repetition;
  //     this.distance = distance;
  //     this.description = description;
  //     this.exerciseSets=exerciseSets;
  //   }
  // }


  // export class ExerciseSet {
  //   constructor(description, distance) {
  //     this.description = description;
  //     this.distance = distance;
  //   }
  // }


  // export class Workout {
  //   constructor(trainerName, week,goalOfTraining,date,WorkoutParts) {
  //     this.trainerName = trainerName;
  //     this.week = week;
  //     this.goalOfTraining = goalOfTraining;
  //     this.date = date;
  //     this.WorkoutParts = WorkoutParts;
  //   }
  // }


  // export class WorkoutPart {
  //   constructor(name, goal,exercises) {
  //     this.name = name;
  //     this.goal = goal;
  //     this.exercises = exercises;
  //   }
  // }

