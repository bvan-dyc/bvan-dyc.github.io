import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityPoolComponent } from './unity-pool.component';

describe('UnityPoolComponent', () => {
  let component: UnityPoolComponent;
  let fixture: ComponentFixture<UnityPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
