import { QuestionCreate, QuestionPlay } from './question.model';



export interface QuizRaw {
    id: number;
    title: string;
}

export interface QuizCreate {
    title: string;
    questions: QuestionCreate[];
}

export interface QuizEditTitle {
    title: string;
}

export interface QuizPlay {
    id: number;
    title: string;
    questions: QuestionPlay[];
}