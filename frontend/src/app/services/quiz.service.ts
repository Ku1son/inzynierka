import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizRaw, QuizPlay, QuizCreate, QuizEditTitle} from '../models/quiz.model';
import { environment } from '../../environment';



@Injectable({providedIn: 'root'})
export class QuizService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/quizzes`;

  //GET /quizzes -> lista quizow
  getAllQuizzes(): Observable<QuizRaw[]> {
    return this.http.get<QuizRaw[]>(this.apiUrl);
  }

  //GET /quizzes/{id} -> caly quiz z pytaniami i odpowiedziami
  getWholeQuiz(id: number): Observable<QuizPlay> {
    return this.http.get<QuizPlay>(`${this.apiUrl}/${id}`);
  }

  //GET /quizzes/{id}/raw -> tylko quiz
  getRawQuiz(id: number): Observable<QuizRaw> {
    return this.http.get<QuizRaw>(`${this.apiUrl}/${id}/raw`);
  }

  //DELETE /quizzes/{id}
  deleteQuiz(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  //POST /quizzes
  createQuiz(dto: QuizCreate): Observable<QuizRaw> {
    return this.http.post<QuizRaw>(this.apiUrl, dto);
  }

  //PUT /quizzes/{id} -> zastapienie calego quizu z pytaniami i odpowiedziami
  updateQuiz(id: number, dto: QuizCreate): Observable<QuizRaw> {
    return this.http.put<QuizRaw>(`${this.apiUrl}/${id}`, dto);
  }

  //PATCH /quizzes/{id} -> zmiana tylko tytulu
  updateQuizTitle(id: number, dto: QuizEditTitle): Observable<QuizRaw> {
    return this.http.patch<QuizRaw>(`${this.apiUrl}/${id}`, dto);
  }
}