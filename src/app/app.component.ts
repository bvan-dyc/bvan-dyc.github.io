import { Component } from '@angular/core';

export enum appState {
  PORTFOLIO = 0,
  CURRICULUM = 1,
  CONTACT = 2
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bvan-dyc-github-io';
  private state: appState = appState.PORTFOLIO;
  ngOnInit(): void {
  }

  public switchToCurriculum(): void {
    this.state = appState.CURRICULUM;
  }
  public switchToContact(): void {
    this.state = appState.CONTACT;
  }
  public switchToPortfolio(): void {
    this.state = appState.PORTFOLIO;
  }

  public isCurriculum(): boolean {
    return (this.state == appState.CURRICULUM);
  }

  public isContact(): boolean {
    return (this.state == appState.CONTACT);
  }

  public isPortfolio(): boolean {
    return (this.state == appState.PORTFOLIO);
  }
  public openGithub(): void {
    window.open("https://github.com/bvan-dyc", "_blank");
  }

  public openLinkedin(): void {
    window.open("https://www.linkedin.com/in/blaise-van-dyck/", "_blank");
  }
}
