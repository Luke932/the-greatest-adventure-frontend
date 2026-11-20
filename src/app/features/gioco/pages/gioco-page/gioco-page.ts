
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { Footer } from '../../../../shared/components/footer/footer';

import {
  SERIES_QUESTIONS,
  COUPLE_QUESTIONS,
  PERSONAL_QUESTIONS
} from './quiz-question-banks';

export interface QuizQuestion {
  question: string;
  answers: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizRound {
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
}

@Component({
  selector: 'app-gioco-page',
  standalone: true,
  imports: [RouterLink, Navbar, Footer],
  templateUrl: './gioco-page.html',
  styleUrl: './gioco-page.css'
})
export class GiocoPage {

  stage: 'intro' | 'playing' | 'result' = 'intro';

  roundIndex = 0;
  questionIndex = 0;
  score = 0;
  selectedAnswer: number | null = null;

  // Le tre categorie del quiz.
  // Le domande vengono caricate dagli archivi esterni.
  readonly rounds: QuizRound[] = [
    {
      title: 'Guess the Show',
      subtitle: 'Riconosci la serie dagli indizi!',
      questions: []
    },
    {
      title: 'Couple Goals',
      subtitle: 'Quanto conoscete le coppie più famose?',
      questions: []
    },
    {
      title: 'How Well Do You Know Us?',
      subtitle: 'Adesso si parla dei veri protagonisti!',
      questions: []
    }
  ];

  // Copia di gioco: viene mescolata senza modificare gli archivi originali.
  gameRounds: QuizRound[] = [];

  get currentRound(): QuizRound {
    return this.gameRounds[this.roundIndex];
  }

  get currentQuestion(): QuizQuestion {
    return this.currentRound.questions[this.questionIndex];
  }

  get totalQuestions(): number {
    return 20;
  }

  get completedQuestions(): number {
    let completed = this.questionIndex;

    for (let i = 0; i < this.roundIndex; i++) {
      completed += this.gameRounds[i].questions.length;
    }

    return completed;
  }

  get progress(): number {
    return (this.completedQuestions / this.totalQuestions) * 100;
  }

  get questionNumber(): number {
    return this.completedQuestions + 1;
  }

  // Atto 1 = apertura, atti 2-4 = round, atto 5 = finale.
  get actNumber(): number {
    return this.stage === 'result' ? 5 : this.roundIndex + 2;
  }

  get actName(): string {
    if (this.stage === 'result') {
      return 'Grand Finale';
    }

    return [
      'Grand Opening',
      'Guess the Show',
      'Couple Goals',
      'Erika & Luca Files',
      'Grand Finale'
    ][this.actNumber - 1];
  }

  get isCorrect(): boolean {
    return this.selectedAnswer === this.currentQuestion.correctAnswer;
  }

  get isLastQuestion(): boolean {
    return this.completedQuestions === this.totalQuestions - 1;
  }

  get resultTitle(): string {
    const percentage = this.score / this.totalQuestions;

    if (percentage >= 0.85) {
      return 'The Ultimate Wedding Expert';
    }

    if (percentage >= 0.65) {
      return 'Certified Love Story Expert';
    }

    if (percentage >= 0.4) {
      return 'Amico di famiglia... forse!';
    }

    return 'Comparse nella nostra sitcom';
  }

  get resultMessage(): string {
    const percentage = this.score / this.totalQuestions;

    if (percentage >= 0.85) {
      return 'Conoscete davvero tutto di noi. Sospettiamo che abbiate accesso ai nostri messaggi!';
    }

    if (percentage >= 0.65) {
      return 'Niente male! Potete considerarvi parte ufficiale del nostro cast.';
    }

    if (percentage >= 0.4) {
      return 'Vi vogliamo bene lo stesso. Ma forse dovremmo raccontarvi qualche episodio in più!';
    }

    return 'Dobbiamo conoscerci meglio! Per fortuna al matrimonio ci sarà modo di recuperare.';
  }

  get scorePercentage(): number {
    return Math.round((this.score / this.totalQuestions) * 100);
  }

  // Avvia una nuova partita con domande casuali.
  startGame(): void {
    this.gameRounds = this.rounds.map((round, index) => {
      let questions: QuizQuestion[];

      if (index === 0) {
        questions = this.shuffle([...SERIES_QUESTIONS]).slice(0, 7);
      } else if (index === 1) {
        questions = this.shuffle([...COUPLE_QUESTIONS]).slice(0, 7);
      } else {
        questions = this.shuffle([...PERSONAL_QUESTIONS]).slice(0, 6);
      }

      return {
        ...round,
        questions
      };
    });

    this.stage = 'playing';
    this.roundIndex = 0;
    this.questionIndex = 0;
    this.score = 0;
    this.selectedAnswer = null;
  }

  // Registra la risposta selezionata.
  selectAnswer(index: number): void {
    if (this.selectedAnswer !== null) {
      return;
    }

    this.selectedAnswer = index;

    if (index === this.currentQuestion.correctAnswer) {
      this.score++;
    }
  }

  // Passa alla domanda successiva o alla categoria successiva.
  nextQuestion(): void {
    if (this.selectedAnswer === null) {
      return;
    }

    this.selectedAnswer = null;

    if (
      this.questionIndex <
      this.currentRound.questions.length - 1
    ) {
      this.questionIndex++;
      return;
    }

    if (this.roundIndex < this.gameRounds.length - 1) {
      this.roundIndex++;
      this.questionIndex = 0;
      return;
    }

    this.stage = 'result';
  }

  // Ricomincia una partita con nuove domande casuali.
  restartGame(): void {
    this.startGame();
  }

  // Mescolamento casuale Fisher-Yates.
  private shuffle<T>(items: T[]): T[] {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    return items;
  }
}
