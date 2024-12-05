import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { QuestionComponent } from './pages/question/question.component';
import { SurveyDetailsComponent } from './pages/survey-details/survey-details.component';
import { QuestionDetailsComponent } from './pages/question-details/question-details.component';
import { SurveyCreateComponent } from './pages/survey-create/survey-create.component';
import { QuestionCreateComponent } from './pages/question-create/question-create.component';
import { QuestionEditComponent } from './pages/question-edit/question-edit.component';
import { SurveyEditComponent } from './pages/survey-edit/survey-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'survey',
    component: SurveyComponent,
  },
  {
    path: 'survey/:id',
    component: SurveyDetailsComponent,
  },
  {
    path: 'survey/:id/edit',
    component: SurveyEditComponent,
  },
  {
    path: 'survey-create',
    component: SurveyCreateComponent,
  },
  {
    path: 'question',
    component: QuestionComponent,
  },
  {
    path: 'question/:id',
    component: QuestionDetailsComponent,
  },
  {
    path: 'question/:id/edit',
    component: QuestionEditComponent,
  },
  {
    path: 'question-create',
    component: QuestionCreateComponent,
  },
];
