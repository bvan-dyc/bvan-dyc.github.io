import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  private state: portfolioState = portfolioState.PYRAMIDEKA;
  constructor() { }
 
  public switchToPyramideka(): void {
    this.state = portfolioState.PYRAMIDEKA;
  }
  public switchToUnityPool(): void {
    this.state = portfolioState.UNITYPOOL;
  }
  public switchToGameJams(): void {
    this.state = portfolioState.GAMEJAMS;
  }
  public stateIsPyramideka(): boolean {
    return (this.state == portfolioState.PYRAMIDEKA);
  }
  public stateIsUnityPool(): boolean {
    return (this.state == portfolioState.UNITYPOOL);
  }
  public stateIsGameJams(): boolean {
    return (this.state == portfolioState.GAMEJAMS);
  }
  ngOnInit(): void {
    
  }
}

export enum portfolioState {
  PYRAMIDEKA,
  GAMEJAMS,
  UNITYPOOL
}
