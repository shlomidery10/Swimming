import { Exercise } from './exercise.model';
import { calculateExerciseDistance } from '../Utilities';

export class WorkoutPart {

  constructor(name: string, goal: string,exercises: Exercise[]) {
        this.name = name;
        this.goal = goal;
        this.exercises = exercises;
        let totalDistance =0;
        if(exercises){
          exercises.forEach(exercise=> totalDistance+=calculateExerciseDistance(exercise));
        }
        this.totalDistance = totalDistance;
      }

    name:string;
    goal:string;
    exercises:Array<Exercise>;
    totalDistance:number;
  }

