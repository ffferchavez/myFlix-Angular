import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailDialogComponent } from './movie-detail-dialog.component';

describe('MovieDetailDialogComponent', () => {
  let component: MovieDetailDialogComponent;
  let fixture: ComponentFixture<MovieDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
