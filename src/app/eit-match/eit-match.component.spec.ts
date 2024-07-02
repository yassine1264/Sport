import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EitMatchComponent } from './eit-match.component';

describe('EitMatchComponent', () => {
  let component: EitMatchComponent;
  let fixture: ComponentFixture<EitMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EitMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EitMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
