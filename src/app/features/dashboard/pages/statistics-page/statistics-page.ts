import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject
} from '@angular/core';

import { Router } from '@angular/router';

import {
  Chart,
  ChartConfiguration,
  registerables
} from 'chart.js';

import {
  StatsService,
  StatsResponse
} from '../../../../core/services/stats';

Chart.register(...registerables);

@Component({
  selector: 'app-statistics-page',
  imports: [],
  templateUrl: './statistics-page.html',
  styleUrl: './statistics-page.css'
})
export class StatisticsPage
  implements OnInit, AfterViewInit, OnDestroy {

  private readonly statsService =
    inject(StatsService);

  private readonly router =
    inject(Router);

  private readonly cdr =
    inject(ChangeDetectorRef);

  stats: StatsResponse | null = null;

  isLoading = true;

  errorMessage = '';

  private rsvpChart: Chart | null = null;

  private menuChart: Chart | null = null;


  ngOnInit(): void {

    this.loadStats();

  }


  ngAfterViewInit(): void {

    this.tryCreateCharts();

  }


  ngOnDestroy(): void {

    this.rsvpChart?.destroy();

    this.menuChart?.destroy();

  }


  private loadStats(): void {

    this.isLoading = true;

    this.errorMessage = '';


    this.statsService
      .getStats()
      .subscribe({

        next: (response) => {

          console.log(
            'STATISTICHE:',
            response
          );

          this.stats = response;

          this.isLoading = false;

          this.cdr.detectChanges();

          setTimeout(() => {

            this.createCharts();

          });

        },


        error: (error) => {

          console.error(
            'ERRORE STATISTICHE:',
            error
          );

          this.isLoading = false;

          this.errorMessage =
            'Non è stato possibile caricare le statistiche.';

          this.cdr.detectChanges();

        }

      });

  }


  private tryCreateCharts(): void {

    if (!this.stats) {
      return;
    }

    this.createCharts();

  }


  private createCharts(): void {

    if (!this.stats) {
      return;
    }


    this.rsvpChart?.destroy();

    this.menuChart?.destroy();


    const rsvpCanvas =
      document.getElementById(
        'rsvpChart'
      ) as HTMLCanvasElement | null;


    const menuCanvas =
      document.getElementById(
        'menuChart'
      ) as HTMLCanvasElement | null;


    if (!rsvpCanvas || !menuCanvas) {
      return;
    }


    this.rsvpChart =
      new Chart(
        rsvpCanvas,
        this.getRsvpChartConfig()
      );


    this.menuChart =
      new Chart(
        menuCanvas,
        this.getMenuChartConfig()
      );

  }


  private getRsvpChartConfig():
    ChartConfiguration<'doughnut'> {

    return {

      type: 'doughnut',

      data: {

        labels: [
          'Confermati',
          'In attesa',
          'Non partecipano'
        ],

        datasets: [

          {
            data: [

              this.stats!.confirmedGuests,

              this.stats!.pendingGuests,

              this.stats!.declinedGuests

            ],

            backgroundColor: [
              '#7ea982',
              '#d6b56d',
              '#a85d52'
            ],

            borderColor:
              '#263a2c',

            borderWidth: 3

          }

        ]

      },

      options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: '68%',

        plugins: {

          legend: {

            position: 'bottom',

            labels: {

              color: '#d3dfc5',

              padding: 18,

              font: {

                family:
                  'Trebuchet MS',

                size: 12

              }

            }

          }

        }

      }

    };

  }


  private getMenuChartConfig():
    ChartConfiguration<'bar'> {

    return {

      type: 'bar',

      data: {

        labels: [

          'Standard',
          'Celiaco',
          'Vegetariano',
          'Vegano',
          'Altro'

        ],

        datasets: [

          {

            label: 'Persone',

            data: [

              this.stats!.standardPeople,

              this.stats!.celiacPeople,

              this.stats!.vegetarianPeople,

              this.stats!.veganPeople,

              this.stats!.otherMenuPeople

            ],

            backgroundColor: '#a9bd96',

            borderColor: '#d3dfc5',

            borderWidth: 1,

            borderRadius: 8

          }

        ]

      },

      options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

          legend: {

            display: false

          }

        },

        scales: {

          x: {

            ticks: {

              color: '#aeb9a8',

              font: {

                family:
                  'Trebuchet MS',

                size: 11

              }

            },

            grid: {

              display: false

            }

          },

          y: {

            beginAtZero: true,

            ticks: {

              color: '#aeb9a8',

              precision: 0

            },

            grid: {

              color:
                'rgba(255,255,255,0.06)'

            }

          }

        }

      }

    };

  }


  backToDashboard(): void {

    this.router.navigate([
      '/dashboard'
    ]);

  }

}