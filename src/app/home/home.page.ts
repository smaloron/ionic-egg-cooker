import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Le temps restant
  public timeLeftInSeconds = 0;

  // La durée de cuisson
  private durationInSeconds = 4 * 60;

  // Le chrono
  public timer;

  constructor() { }
  
  public startTimer() {
    // le temps restant et égal à la durée
    // uniquement qand on lance un nouveau chrono
    // et pas quand on reprend un chrono en pause
    if (this.timeLeftInSeconds == 0) {
      this.timeLeftInSeconds = this.durationInSeconds;
    }
    
    // A chaque seconde on décrémente le temps restant
    this.timer = setInterval(
      () => {
        this.timeLeftInSeconds--;
        // Arrêt du chrono quand le temps restant 
        // est égal à zéro
        if (this.timeLeftInSeconds == 0) {
          clearInterval(this.timer);
          this.timer = null;
        }
      },
      1000
    );
  }

  public displayTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;

    return minutes + ':' + seconds;
  }

  public stopTimer() {
    clearInterval(this.timer);
    this.timeLeftInSeconds = 0;
    this.timer = null;
  }

  public pauseTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

}
