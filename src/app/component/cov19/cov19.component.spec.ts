import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cov19Component } from './cov19.component';

describe('Cov19Component', () => {
  let component: Cov19Component;
  let fixture: ComponentFixture<Cov19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cov19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cov19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
