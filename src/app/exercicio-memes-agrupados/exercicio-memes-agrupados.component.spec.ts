import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioMemesAgrupadosComponent } from './exercicio-memes-agrupados.component';

describe('ExercicioMemesAgrupadosComponent', () => {
  let component: ExercicioMemesAgrupadosComponent;
  let fixture: ComponentFixture<ExercicioMemesAgrupadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioMemesAgrupadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioMemesAgrupadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
