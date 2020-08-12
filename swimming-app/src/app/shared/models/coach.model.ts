import {User} from './user.model'
import {Team} from './team.model'

export class Coach implements User {
    firstName: string;
    lastName: string;
    email: string;
    teams:Team[];
  }