import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreDialogComponent } from '../genre-dialog/genre-dialog.component';
import { DirectorDialogComponent } from '../director-dialog/director-dialog.component';
import { MovieDetailDialogComponent } from '../movie-detail-dialog/movie-detail-dialog.component';

/**
 * Component that displays a list of movie cards with options to view details.
 * 
 * @component
 * @example
 * <app-movie-card></app-movie-card>
 */
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  /** Array of movie objects to be displayed. */
  movies: any[] = [];

  /**
   * Creates an instance of MovieCardComponent.
   * 
   * @param fetchApiData Service to fetch movie data from the API.
   * @param dialog Service to open dialog components.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog
  ) { }

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * Retrieves the list of movies.
   */
  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Fetches all movies from the API and assigns them to the `movies` array.
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Opens a dialog based on the type and passes the corresponding data to it.
   * 
   * @param type The type of dialog to open. Can be 'genre', 'director', or 'details'.
   * @param data The data to be passed to the dialog.
   */
  openDialog(type: string, data: any): void {
    let dialogRef;
  
    switch (type) {
      case 'genre':
        dialogRef = this.dialog.open(GenreDialogComponent, { data });
        break;
      case 'director':
        dialogRef = this.dialog.open(DirectorDialogComponent, { data });
        break;
      case 'details':
        dialogRef = this.dialog.open(MovieDetailDialogComponent, { data });
        break;
    }
  
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog closed');
      });
    }
  }
}
