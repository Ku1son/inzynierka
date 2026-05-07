import { AnswerCreate, AnswerPlay } from './answer.model';



export interface QuestionCreate {
    content: string;
    answers: AnswerCreate[];
}

export interface QuestionPlay {
    id: number;
    content: string;
    answers: AnswerPlay[];
}