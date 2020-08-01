import {WorkoutSet} from "./workoutset";

export class TrainingSet {
    id:number
    workoutSet:WorkoutSet
    Parts_of_the_training:Array<WorkoutSet>;
  }