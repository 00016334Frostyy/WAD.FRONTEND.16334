import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Router } from '@angular/router';
import { SurveyService } from '../../../services/survey.service';
import { Survey } from '../../../interfaces/survey.interface';
import { TableKey } from '../../../types';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss',
})
export class SurveyComponent {
  router = inject(Router);
  surveyService = inject(SurveyService);
  surveys: Survey[] = [];

  ngOnInit() {
    this.surveyService.getSurveys().subscribe((result) => {
      this.surveys = result;
    });
  }

  displayedColumns: TableKey[] = [
    {
      label: 'Id',
      key: 'id',
    },
    {
      label: 'Title',
      key: 'title',
    },
    {
      label: 'Description',
      key: 'description',
    },
    {
      label: 'Created Date',
      key: 'createdDate',
    },
  ];
}
