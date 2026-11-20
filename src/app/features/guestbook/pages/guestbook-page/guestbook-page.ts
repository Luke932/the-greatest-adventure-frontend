
import { RouterLink } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

    this.guestbookService.getApprovedMessages().subscribe({
      next: (messages) => {
        console.log('Guestbook - messaggi ricevuti:', messages);

        this.messages = Array.isArray(messages) ? messages : [];

        this.selectRandomMessages();

        this.isLoading = false;
      },

      error: (error) => {
        console.error('Errore caricamento Guestbook:', error);

        this.messages = [];
        this.displayedMessages = [];

        this.loadingError =
          'Non è stato possibile caricare i messaggi. Riprova più tardi.';

        this.isLoading = false;
      }
    });
  }

  // SELEZIONE CASUALE DI MASSIMO 6 MESSAGGI
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
  }

  // PUBBLICAZIONE MESSAGGIO
  submitMessage(): void {
    const authorName = this.authorName.trim();
    const message = this.message.trim();

    if (!authorName || !message || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.submitted = false;

    this.guestbookService.createMessage({
      authorName,
      message
    }).subscribe({

      next: () => {
        console.log('Guestbook - messaggio pubblicato correttamente');

        // PULIZIA CAMPI
        this.authorName = '';
        this.message = '';

        // CHIUSURA FORM
        this.showForm = false;
        this.isSubmitting = false;

        // CONFERMA PUBBLICAZIONE
        this.submitted = true;

        // RICARICA MESSAGGI DAL BACKEND
        this.loadMessages();
      },

      error: (error) => {
        console.error('Errore pubblicazione Guestbook:', error);

        this.errorMessage =
          'Ops! Non siamo riusciti a inviare il tuo messaggio. Riprova.';

        this.isSubmitting = false;
      }
    });
  }

  // CARATTERI RIMANENTI
  get remainingCharacters(): number {
    return 1000 - this.message.length;
  }
}
