import { async, TestBed } from '@angular/core/testing';
import { QuizPlayerModule } from './quiz-player.module';

describe('QuizPlayerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QuizPlayerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QuizPlayerModule).toBeDefined();
  });
});
