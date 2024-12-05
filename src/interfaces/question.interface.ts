import { Survey } from './survey.interface';

export interface Question extends QuestionCreate {
  id: number;
  survey: Survey | null;
}

export interface QuestionCreate {
  text: string;
  surveyId: number | null;
}
