import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreDialogComponent } from '../genre-dialog/genre-dialog.component';
import { DirectorDialogComponent } from '../director-dialog/director-dialog.component';
import { MovieDetailDialogComponent } from '../movie-detail-dialog/movie-detail-dialog.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

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
