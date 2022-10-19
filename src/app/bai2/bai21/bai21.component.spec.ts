import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai21Component } from './bai21.component';

describe('Bai21Component', () => {
  let component: Bai21Component;
  let fixture: ComponentFixture<Bai21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
