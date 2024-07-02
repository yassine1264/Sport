import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcheTableComponent } from './matche-table.component';

describe('MatcheTableComponent', () => {
  let component: MatcheTableComponent;
  let fixture: ComponentFixture<MatcheTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatcheTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatcheTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
