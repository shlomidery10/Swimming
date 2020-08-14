import { Exercise } from './models/exercise.model';

export function calculateExerciseDistance(exercise:Exercise):number{
  let repetition=1;
  if(exercise.repetition && exercise.repetition > 0){
    repetition= exercise.repetition
  }
  let distance=0;
  if(exercise.distance && exercise.distance > 0){
    distance = exercise.distance
  }
  return repetition*distance;
}