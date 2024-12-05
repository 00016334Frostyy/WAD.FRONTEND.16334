import { Component, inject } from '@angular/core';
import { CCreateComponent } from '../../components/s-create/s-create.component';
import { SurveyService } from '../../../services/survey.service';
import { Survey } from '../../../interfaces/survey.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-edit',
  standalone: true,
  imports: [CCreateComponent],
  templateUrl: './survey-edit.component.html',
  styleUrl: './survey-edit.component.scss',
})
export class SurveyEditComponent {
  surveyDetail: Survey = {
    id: 0,
    title: '',
    description: '',
    createdDate: '',
  };

  activatedRoute = inject(ActivatedRoute);
  surveyService = inject(SurveyService);

  ngOnInit() {
    this.surveyService
      .getSurvey(this.activatedRoute.snapshot.params['id'])
      .subscribe((survey) => {
        this.surveyDetail = survey;
      });
  }
}
