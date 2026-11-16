
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { Footer } from '../../../../shared/components/footer/footer';

interface QuizQuestion {
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

  // Le tre categorie originali: le domande non vengono modificate.
  readonly rounds: QuizRound[] = [
    {
      title: 'Guess the Show',
      subtitle: 'Riconosci la serie dagli indizi!',
      questions: [
        {
          question:
            'Un gruppo di amici, un divano arancione, un bar e una serie infinita di appuntamenti sentimentali. Di quale serie parliamo?',
          answers: [
            'The Big Bang Theory',
            'Friends',
            'Modern Family',
            'Stranger Things'
          ],
          correctAnswer: 1,
          explanation:
            'Esatto! Friends. E ricordate: saremo sempre lì per voi!'
        },
        {
          question:
            'Un gruppo di ragazzi, biciclette, luci che lampeggiano e un mondo parallelo decisamente poco ospitale. Qual è la serie?',
          answers: [
            'How I Met Your Mother',
            'Friends',
            'Stranger Things',
            'The Office'
          ],
          correctAnswer: 2,
          explanation:
            'Giusto! Stranger Things. Speriamo che il nostro matrimonio non nasconda un Sottosopra!'
        },
        {
          question:
            'Scienziati, fumetti, videogiochi e una quantità impressionante di battute incomprensibili ai comuni mortali. Qual è la serie?',
          answers: [
            'The Big Bang Theory',
            'Modern Family',
            'Friends',
            'How I Met Your Mother'
          ],
          correctAnswer: 0,
          explanation:
            'Bazinga! È The Big Bang Theory!'
        }
      ]
    },
    {
      title: 'Couple Goals',
      subtitle: 'Quanto conoscete le coppie più famose?',
      questions: [
        {
          question:
            'Quale coppia ha avuto una relazione decisamente complicata tra pause, ritorni e incomprensioni?',
          answers: [
            'Jim e Pam',
            'Ross e Rachel',
            'Monica e Chandler',
            'Lily e Marshall'
          ],
          correctAnswer: 1,
          explanation:
            'Ross e Rachel! E speriamo che Erika e Luca non debbano mai discutere di una pausa!'
        },
        {
          question:
            'Quale coppia dimostra che anche due persone molto diverse possono essere una squadra perfetta?',
          answers: [
            'Morticia e Gomez',
            'Jim e Pam',
            'Ross e Rachel',
            'Ted e Robin'
          ],
          correctAnswer: 1,
          explanation:
            'Jim e Pam! Una coppia che sa capirsi anche senza troppe parole.'
        },
        {
          question:
            'Quale coppia è famosa per un amore intenso, romantico e decisamente fuori dagli schemi?',
          answers: [
            'Ted e Robin',
            'Monica e Chandler',
            'Morticia e Gomez',
            'Barney e Robin'
          ],
          correctAnswer: 2,
          explanation:
            'Morticia e Gomez! Un amore che supera davvero ogni limite.'
        }
      ]
    },
    {
      title: 'How Well Do You Know Us?',
      subtitle: 'Adesso si parla dei veri protagonisti!',
      questions: [
        {
          question:
            'Chi dei due dice "arrivo subito" e poi sparisce nel tempo?',
          answers: ['Luca', 'Erika'],
          correctAnswer: 1,
          explanation:
            'Erika! Il concetto di puntualità è decisamente soggettivo.'
        },
        {
          question:
            'Chi potrebbe perdere una cosa mentre ce l’ha in mano?',
          answers: ['Luca', 'Erika'],
          correctAnswer: 1,
          explanation:
            'Erika! L’ordine non è evidentemente il suo superpotere.'
        },
        {
          question:
            'Chi ha avuto il coraggio di fare la prima mossa?',
          answers: ['Erika', 'Luca'],
          correctAnswer: 1,
          explanation:
            'Luca! Almeno qualcuno doveva pur iniziare questa storia.'
        },
        {
          question:
            'Chi è più geloso?',
          answers: [
            'Erika',
            'Luca',
            'Entrambi',
            'Il pubblico non ha ancora prove sufficienti!'
          ],
          correctAnswer: 3,
          explanation:
            'Caso ancora aperto. Le indagini proseguiranno dopo il matrimonio.'
        },
        {
          question:
            'Chi se la prende più facilmente?',
          answers: ['Erika', 'Luca'],
          correctAnswer: 1,
          explanation:
            'Luca! Attenzione: maneggiare con cura.'
        },
        {
          question:
            'Chi è più spendaccione?',
          answers: [
            'Erika',
            'Luca',
            'Entrambi, senza possibilità di appello!'
          ],
          correctAnswer: 2,
          explanation:
            'Entrambi! Il conto in banca preferisce non commentare.'
        },
        {
          question:
            'Chi è il più testardo dei due?',
          answers: [
            'Erika',
            'Luca',
            'Luca, finché a un certo punto si spegne completamente!'
          ],
          correctAnswer: 2,
          explanation:
            'Luca! Luca ha abbandonato la discussione. Riprovare più tardi.'
        },
        {
          question:
            'Chi non sopporta perdere?',
          answers: [
            'Erika',
            'Luca',
            'Entrambi, ma Luca la vive come una questione di principio!'
          ],
          correctAnswer: 2,
          explanation:
            'Luca! Non è importante vincere, è importante dimostrare che l’altro ha barato.'
        },
        {
          question:
            'Chi diventa insopportabile quando ha fame?',
          answers: ['Erika', 'Luca'],
          correctAnswer: 1,
          explanation:
            'Luca! Somministrare cibo immediatamente. Non tentare di ragionare con lui.'
        },
        {
          question:
            'Chi fa pace per primo dopo un litigio?',
          answers: ['Erika', 'Luca'],
          correctAnswer: 0,
          explanation:
            'Erika! Ha attivato il protocollo di pace. Luca sta ancora elaborando.'
        },
        {
          question:
            'Chi è il più romantico?',
          answers: [
            'Erika',
            'Luca',
            'Entrambi, a modo loro!'
          ],
          correctAnswer: 2,
          explanation:
            'Entrambi! Due cuori, un solo grande amore.'
        }
      ]
    }
  ];

  // Copia di gioco: viene mescolata senza alterare l'array originale.
  gameRounds: QuizRound[] = [];

  get currentRound(): QuizRound {
    return this.gameRounds[this.roundIndex];
  }

  get currentQuestion(): QuizQuestion {
    return this.currentRound.questions[this.questionIndex];
  }

  get totalQuestions(): number {
    return this.rounds.reduce(
      (total, round) => total + round.questions.length,
      0
    );
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

  startGame(): void {
    this.gameRounds = this.rounds.map(round => ({
      ...round,
      questions: this.shuffle([...round.questions])
    }));

    this.stage = 'playing';
    this.roundIndex = 0;
    this.questionIndex = 0;
    this.score = 0;
    this.selectedAnswer = null;
  }

  private shuffle<T>(items: T[]): T[] {
    // Fisher-Yates: ogni elemento compare una sola volta.
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    return items;
  }

  selectAnswer(index: number): void {
    if (this.selectedAnswer !== null) {
      return;
    }

    this.selectedAnswer = index;

    if (index === this.currentQuestion.correctAnswer) {
      this.score++;
    }
  }

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

  restartGame(): void {
    this.startGame();
  }
}
