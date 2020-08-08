import { Component } from '@angular/core';
import { Exercise } from './shared/models/exercise.model';
import { ExerciseSet } from './shared/models/exerciseSet.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
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

}
