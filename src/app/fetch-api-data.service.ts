import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const apiUrl = 'https://marvel-flix-c3644575f8db.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {

  constructor(private http: HttpClient) { }

  private getToken(): string {
    const user = localStorage.getItem('user');
    if (!user) {
      return '';
    }

    try {
      const parsedUser = JSON.parse(user);
      return parsedUser.token || '';
    } catch (e) {
      console.error('Error parsing user from localStorage', e);
      return '';
    }
  }

  private extractResponseData(res: any): any {
    return res || {};
  }

  // User Registration
  public registerUser(userDetails: any): Observable<any> {
    return this.http.post(`${apiUrl}users`, userDetails)
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // User Login
  public loginUser(userDetails: any): Observable<any> {
    return this.http.post(`${apiUrl}login`, userDetails)
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // Get All Movies
  public getAllMovies(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}movies`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // Get One Movie
  public getMovie(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}movies/${id}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // Get Director
  public getDirector(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}directors/${id}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // Get Genre
  public getGenre(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}genres/${id}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // Get User
  public getUser(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}users/${id}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // Get Favourite Movies for a User
  public getFavouriteMovies(userId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}users/${userId}/favorites`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // Add a Movie to Favourite Movies
  public addToFavourites(userId: string, movieId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.post(`${apiUrl}users/${userId}/favorites/${movieId}`, {}, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // Edit User
  public editUser(userId: string, updatedData: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.put(`${apiUrl}users/${userId}`, updatedData, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // Delete User
  public deleteUser(userId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.delete(`${apiUrl}users/${userId}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // Delete a Movie from Favourite Movies
  public deleteFromFavourites(userId: string, movieId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.delete(`${apiUrl}users/${userId}/favorites/${movieId}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  // Enhanced Error Handling
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code
      errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError('Something went wrong; please try again later.');
  }

  public getUserProfile(): Observable<any> {
    const userId = this.getCurrentUserId();
    if (!userId) {
      return throwError('User ID not found');
    }
    return this.getUser(userId);
  }
  
  private getCurrentUserId(): string | null {
    const user = localStorage.getItem('user');
    if (!user) {
      return null;
    }
    try {
      const parsedUser = JSON.parse(user);
      return parsedUser.id || null;
    } catch (e) {
      console.error('Error parsing user from localStorage', e);
      return null;
    }
  }

}
