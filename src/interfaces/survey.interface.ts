export interface Survey extends SurveyCreate {
  id: number;
}

export interface SurveyCreate {
  title: string;
  description: string;
  createdDate: string;
}
