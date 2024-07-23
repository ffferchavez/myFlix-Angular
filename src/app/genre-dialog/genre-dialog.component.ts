import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Component that displays a dialog with genre details.
 * 
 * @component
 * @example
 * <app-genre-dialog [data]="genreData"></app-genre-dialog>
 */
@Component({
  selector: 'app-genre-dialog',
  templateUrl: './genre-dialog.component.html',
  styleUrls: ['./genre-dialog.component.scss']
})
export class GenreDialogComponent {
  /**
   * Creates an instance of GenreDialogComponent.
   * 
   * @param data The data to be displayed in the dialog. This data should include `genreName` and `genreDescription`.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
