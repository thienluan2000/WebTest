import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameonlineComponent } from './gameonline.component';

describe('GameonlineComponent', () => {
  let component: GameonlineComponent;
  let fixture: ComponentFixture<GameonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameonlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
