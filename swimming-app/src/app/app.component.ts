import { Component } from '@angular/core';
import { Exercise } from './shared/models/exercise.model';
import { ExerciseSet } from './shared/models/exerciseSet.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { User } from './shared/models/user.model';
import { Coach } from './shared/models/coach.model';
import { Trainee } from './shared/models/trainee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apptitle;
  direction:string="ltr";
  
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'he']);
    translate.setDefaultLang('he');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|he/) ? browserLang : 'he');
    this.translate.get('direction').subscribe((res: any) => {
      this.direction= res;
    });
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.direction= event.translations['direction'];
    });

  }
  
  exercise: Exercise = {
    description:"",
    distance:null,
    repetition:null,
    exerciseSets:new Array<ExerciseSet>()
  };

  exerciseSets:ExerciseSet = new ExerciseSet("str",9);
  coach:Coach= {
    firstName:"תמיר",
    lastName:"111חומ",
    email:"tamir@gmail.com",
    teams: []
  };
  userDetails:User[]=[{
    firstName:"תמיר",
    lastName:"111חומ",
    email:"tamir@gmail.com",
  },{
    firstName:"תמיר",
    lastName:"222חומ",
    email:"tamir@gmail.com"
  },
    this.coach
  ];

  trainees:Trainee[]= [{
    firstName:"תמיר",
    lastName:"111חומ",
    email:"tamir@gmail.com",
  },{
    firstName:"תמיר",
    lastName:"222חומ",
    email:"tamir@gmail.com"
  }
  ];
  coachDetails: Coach= {
    firstName:"",
    lastName:"",
    email:"",
    teams:[
      {
        name:"",
        trainees:[]
      }
    ]
  };
}
