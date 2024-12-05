import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../../../services/survey.service';
import { Survey } from '../../../interfaces/survey.interface';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-survey-details',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './survey-details.component.html',
  styleUrl: './survey-details.component.scss',
})
export class SurveyDetailsComponent {
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
