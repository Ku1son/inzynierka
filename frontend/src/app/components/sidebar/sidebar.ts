import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';
import { QuizRaw } from '../../models/quiz.model';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone: true,
})
export class Sidebar implements OnInit {
  private quizService = inject(QuizService);
  quizzes = signal<QuizRaw[]>([]);
  editingQuizId = signal<number | null>(null)
  editedTitle = signal('');

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes(): void {
    console.log('Loading quizzes...');
    this.quizService.getAllQuizzes().subscribe({
      next: (data) => {
        console.log('Received quizzes:', data);
        this.quizzes.set(data);
      },
      error: (err) => {
        console.error('Failed to load quizzes', err);
      }
    });
  }

  onQuizClick(quizId: number): void {
    // TODO: open quiz solving page
    console.log('Quiz clicked:', quizId);
  }

  onEditTitle(quizId: number): void {
    const quiz = this.quizzes().find(q => q.id === quizId);
    if (!quiz) {
      return;
    }
    this.editingQuizId.set(quizId);
    this.editedTitle.set(quiz.title);
  }

  onSaveTitle(quizId: number): void {
  const newTitle = this.editedTitle().trim();
  if (!newTitle) {
    return;
  }
  this.quizService.updateQuizTitle(quizId, {
    title: newTitle
  }).subscribe({
    next: (updatedQuiz) => {
      this.quizzes.update(quizzes =>
        quizzes.map(q =>
          q.id === quizId
            ? updatedQuiz
            : q
        )
      );
      this.editingQuizId.set(null);
      this.editedTitle.set('');
    },
    error: (err) => {
      console.error('Failed to update title', err);
    }
  });
}

onCancelEdit(): void {
  this.editingQuizId.set(null);
  this.editedTitle.set('');
}

  onDeleteQuiz(quizId: number): void {
    // TODO: delete quiz
    console.log('Delete quiz:', quizId);
  }
}