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

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.isLoading = true;

    this.guestbookService.getApprovedMessages().subscribe({
      next: (messages) => {
        this.messages = messages;
        this.selectRandomMessages();
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage =
          'Non è stato possibile caricare i messaggi. Riprova più tardi.';

        this.isLoading = false;
      }
    });
  }

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

  openForm(): void {
    this.showForm = true;
    this.submitted = false;
    this.errorMessage = '';
  }

  closeForm(): void {
    this.showForm = false;
    this.errorMessage = '';
  }

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
      next: (newMessage) => {

        this.messages = [newMessage, ...this.messages];

        const otherMessages = this.displayedMessages.filter(
          item => item.id !== newMessage.id
        );

        for (let i = otherMessages.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));

          [otherMessages[i], otherMessages[j]] =
            [otherMessages[j], otherMessages[i]];
        }

        this.displayedMessages = [
          newMessage,
          ...otherMessages.slice(0, this.maxVisibleMessages - 1)
        ];

        this.authorName = '';
        this.message = '';

        this.isSubmitting = false;
        this.showForm = false;
        this.submitted = true;
      },

      error: () => {
        this.errorMessage =
          'Ops! Non siamo riusciti a inviare il tuo messaggio. Riprova.';

        this.isSubmitting = false;
      }
    });
  }

  get remainingCharacters(): number {
    return 1000 - this.message.length;
  }
}
