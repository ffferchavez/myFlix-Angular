import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Declaring the API URL that will provide data for the client app
const apiUrl = 'https://marvel-flix-c3644575f8db.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {

  constructor(private http: HttpClient) { }

  // User Registration
  public registerUser(userDetails: any): Observable<any> {
    return this.http.post(`${apiUrl}users`, userDetails)
      .pipe(catchError(this.handleError));
  }

  // User Login
  public loginUser(userDetails: any): Observable<any> {
    return this.http.post(`${apiUrl}login`, userDetails)
      .pipe(catchError(this.handleError));
  }

  // Get All Movies
  public getAllMovies(): Observable<any> {
    return this.http.get(`${apiUrl}movies`)
      .pipe(catchError(this.handleError));
  }

  // Get One Movie
  public getMovie(id: string): Observable<any> {
    return this.http.get(`${apiUrl}movies/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Get Director
  public getDirector(id: string): Observable<any> {
    return this.http.get(`${apiUrl}directors/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Get Genre
  public getGenre(id: string): Observable<any> {
    return this.http.get(`${apiUrl}genres/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Get User
  public getUser(id: string): Observable<any> {
    return this.http.get(`${apiUrl}users/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Get Favourite Movies for a User
  public getFavouriteMovies(userId: string): Observable<any> {
    return this.http.get(`${apiUrl}users/${userId}/favorites`)
      .pipe(catchError(this.handleError));
  }

  // Add a Movie to Favourite Movies
  public addToFavourites(userId: string, movieId: string): Observable<any> {
    return this.http.post(`${apiUrl}users/${userId}/favorites/${movieId}`, {})
      .pipe(catchError(this.handleError));
  }

  // Edit User
  public editUser(userId: string, updatedData: any): Observable<any> {
    return this.http.put(`${apiUrl}users/${userId}`, updatedData)
      .pipe(catchError(this.handleError));
  }

  // Delete User
  public deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${apiUrl}users/${userId}`)
      .pipe(catchError(this.handleError));
  }

  // Delete a Movie from Favourite Movies
  public deleteFromFavourites(userId: string, movieId: string): Observable<any> {
    return this.http.delete(`${apiUrl}users/${userId}/favorites/${movieId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
}
