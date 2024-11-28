import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() startTimeInSeconds: number = 24 * 60 * 60; // Input for starting time in seconds (default 24 hours)
  remainingTime: number = this.startTimeInSeconds;
  timerInterval: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval); // Clear the timer when the component is destroyed
  }

  startTimer() {
    this.remainingTime = this.startTimeInSeconds; // Initialize with input time
    this.timerInterval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(this.timerInterval); // Stop the timer when it reaches 0
      }
    }, 1000); // Decrement every second
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(secs)}`;
  }

  padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
