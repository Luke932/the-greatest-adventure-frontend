
import { RouterLink } from '@angular/router';
import {
  Component,
  OnInit,
  inject,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';

import {
  GuestbookService,
  GuestbookMessage
} from '../../../../core/services/guestbook.service';

@Component({
  selector: 'app-guestbook-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './guestbook-page.html',
  styleUrl: './guestbook-page.css'
})
export class GuestbookPage implements OnInit {

  private guestbookService = inject(GuestbookService);
  private cdr = inject(ChangeDetectorRef);

  messages: GuestbookMessage[] = [];
  displayedMessages: GuestbookMessage[] = [];

  readonly maxVisibleMessages = 6;

  authorName = '';
  message = '';

  isLoading = false;
  isSubmitting = false;
  showForm = false;
  submitted = false;

  errorMessage = '';
  loadingError = '';

  ngOnInit(): void {
    this.loadMessages();
  }

  // CARICAMENTO MESSAGGI
  loadMessages(): void {

    this.isLoading = true;
    this.loadingError = '';

    this.cdr.markForCheck();

    this.guestbookService.getApprovedMessages()
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe({

        next: (messages) => {

          console.log('Messaggi ricevuti:', messages);

          this.messages = Array.isArray(messages) ? messages : [];

          this.selectRandomMessages();

          this.cdr.markForCheck();
        },

        error: (error) => {

          console.error('Errore caricamento:', error);

          this.messages = [];
          this.displayedMessages = [];

          this.loadingError =
            'Non è stato possibile caricare i messaggi. Riprova più tardi.';

          this.cdr.markForCheck();
        }
      });
  }

  // SELEZIONE CASUALE
  private selectRandomMessages(): void {

    const shuffled = [...this.messages];

    for (let i = shuffled.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    this.displayedMessages = shuffled.slice(
      0,
      this.maxVisibleMessages
    );
  }

  // APERTURA FORM
  openForm(): void {

    this.showForm = true;
    this.submitted = false;
    this.errorMessage = '';

    this.cdr.markForCheck();
  }

  // CHIUSURA FORM
  closeForm(): void {

    if (this.isSubmitting) {
      return;
    }

    this.showForm = false;
    this.errorMessage = '';
    this.authorName = '';
    this.message = '';

    this.cdr.markForCheck();
  }

  // PUBBLICAZIONE
  submitMessage(): void {

    const authorName = this.authorName.trim();
    const message = this.message.trim();

    if (!authorName || !message || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.submitted = false;

    this.cdr.markForCheck();

    this.guestbookService.createMessage({
      authorName,
      message
    })
    .pipe(
      finalize(() => {
        this.isSubmitting = false;
        this.cdr.markForCheck();
      })
    )
    .subscribe({

      next: (response) => {

        console.log('Messaggio pubblicato:', response);

        this.authorName = '';
        this.message = '';

        this.showForm = false;
        this.submitted = true;

        // Mostra immediatamente il messaggio appena salvato
        if (response) {
          this.messages = [
            response,
            ...this.messages.filter(item => item.id !== response.id)
          ];

          this.selectRandomMessages();
        }

        this.cdr.markForCheck();

        // Ricarica la lista completa dal database
        this.loadMessages();
      },

      error: (error) => {

        console.error('Errore pubblicazione:', error);

        this.errorMessage =
          'Ops! Non siamo riusciti a inviare il tuo messaggio. Riprova.';

        this.cdr.markForCheck();
      }
    });
  }

  get remainingCharacters(): number {
    return 1000 - this.message.length;
  }
}
