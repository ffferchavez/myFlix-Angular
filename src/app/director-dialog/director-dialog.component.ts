import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Component that displays a dialog with director details.
 * 
 * @component
 * @example
 * <app-director-dialog [data]="directorData"></app-director-dialog>
 */
@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html',
  styleUrls: ['./director-dialog.component.scss']
})
export class DirectorDialogComponent {
  /**
   * Creates an instance of DirectorDialogComponent.
   * 
   * @param data The data to be displayed in the dialog. This data should include `directorName` and `directorBiography`.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
