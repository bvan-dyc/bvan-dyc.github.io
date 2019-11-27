import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameJamsComponent } from './game-jams.component';

describe('GameJamsComponent', () => {
  let component: GameJamsComponent;
  let fixture: ComponentFixture<GameJamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameJamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameJamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
