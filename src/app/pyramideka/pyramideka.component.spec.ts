import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidekaComponent } from './pyramideka.component';

describe('PyramidekaComponent', () => {
  let component: PyramidekaComponent;
  let fixture: ComponentFixture<PyramidekaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidekaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
