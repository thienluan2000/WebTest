import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameColComponent } from './game-col.component';

describe('GameColComponent', () => {
  let component: GameColComponent;
  let fixture: ComponentFixture<GameColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameColComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
