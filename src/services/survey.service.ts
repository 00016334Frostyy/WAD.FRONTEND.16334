import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Survey, SurveyCreate } from '../interfaces/survey.interface';
import { Observable } from 'rxjs';

const BASE_URL = 'https://localhost:7139/api';
@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  httpClient = inject(HttpClient);

  getSurveys(): Observable<Survey[]> {
    return this.httpClient.get<Survey[]>(`${BASE_URL}/Surveys`);
  }

  getSurvey(id: number): Observable<Survey> {
    return this.httpClient.get<Survey>(`${BASE_URL}/Surveys/${id}`);
  }

  updateSurvey(id: number, survey: SurveyCreate) {
    return this.httpClient.put(`${BASE_URL}/Surveys/${id}`, survey);
  }

  deleteSurvey(id: number) {
    return this.httpClient.delete(`${BASE_URL}/Surveys/${id}`);
  }

  createSurvey(survey: SurveyCreate): Observable<Survey> {
    return this.httpClient.post<Survey>(`${BASE_URL}/Surveys`, survey);
  }
}
