import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';

/**
 * Component that displays detailed information about a specific movie.
 * 
 * @component
 * @example
 * <app-movie-details></app-movie-details>
 */
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  /** The movie object containing detailed information to be displayed. */
  movie: any;

  /**
   * Creates an instance of MovieDetailsComponent.
   * 
   * @param route The ActivatedRoute service for accessing route parameters.
   * @param fetchApiData Service to fetch movie data from the API.
   */
  constructor(
    private route: ActivatedRoute,
    private fetchApiData: FetchApiDataService
  ) {}

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * Fetches the movie details based on the route parameter.
   */
  ngOnInit(): void {
    this.getMovieDetails();
  }

  /**
   * Fetches the movie details from the API based on the movie ID from the route parameter.
   */
  getMovieDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchApiData.getMovie(id).subscribe((resp: any) => {
        this.movie = resp;
      });
    } else {
      console.error('No movie ID provided');
    }
  }
}
