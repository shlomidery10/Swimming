import { ExerciseSet } from './exerciseSet.model';

export class Exercise {

    constructor(repetition: number, distance: number,description: string,exerciseSets: ExerciseSet[]) {
      this.repetition = repetition;
      this.distance = distance;
      this.description = description;
      this.exerciseSets=exerciseSets;
    }

    repetition:number;
    distance:number;
    description:string;
    exerciseSets: ExerciseSet[]
}
