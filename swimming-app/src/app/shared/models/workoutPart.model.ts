import { Exercise } from './exercise.model';

export class WorkoutPart {

  constructor(name: string, goal: string,exercises: Exercise[]) {
        this.name = name;
        this.goal = goal;
        this.exercises = exercises;
      }

    name:string;
    goal:string;
    exercises:Array<Exercise>;
  }

