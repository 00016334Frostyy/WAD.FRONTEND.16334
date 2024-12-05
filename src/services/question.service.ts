import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Question, QuestionCreate } from '../interfaces/question.interface';

const BASE_URL = 'https://localhost:7139/api';
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  httpClient = inject(HttpClient);

  getQuestions() {
    return this.httpClient.get<Question[]>(`${BASE_URL}/Questions`);
  }

  getQuestion(id: number) {
    return this.httpClient.get<Question>(`${BASE_URL}/Questions/${id}`);
  }

  updateQuestion(id: number, question: QuestionCreate) {
    return this.httpClient.put(`${BASE_URL}/Questions/${id}`, question);
  }

  deleteQuestion(id: number) {
    return this.httpClient.delete(`${BASE_URL}/Questions/${id}`);
  }

  createQuestion(question: QuestionCreate) {
    return this.httpClient.post<Question>(`${BASE_URL}/Questions`, question);
  }
}
