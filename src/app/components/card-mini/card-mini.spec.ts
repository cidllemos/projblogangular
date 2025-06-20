import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMini } from './card-mini';

describe('CardMini', () => {
  let component: CardMini;
  let fixture: ComponentFixture<CardMini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMini);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
