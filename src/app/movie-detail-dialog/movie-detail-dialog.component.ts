import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Component that displays a dialog with movie details.
 * 
 * @component
 * @example
 * <app-movie-detail-dialog [data]="movieData"></app-movie-detail-dialog>
 */
@Component({
  selector: 'app-movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.scss']
})
export class MovieDetailDialogComponent {
  /**
   * Creates an instance of MovieDetailDialogComponent.
   * 
   * @param data The data to be displayed in the dialog. This data should include `movieTitle` and `movieDetails`.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
