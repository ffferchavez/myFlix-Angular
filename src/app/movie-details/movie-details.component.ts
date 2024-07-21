import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private fetchApiData: FetchApiDataService
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

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
