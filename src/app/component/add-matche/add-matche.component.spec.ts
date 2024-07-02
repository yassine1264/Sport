import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatcheComponent } from './add-matche.component';

describe('AddMatcheComponent', () => {
  let component: AddMatcheComponent;
  let fixture: ComponentFixture<AddMatcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMatcheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMatcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
