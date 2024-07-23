import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const apiUrl = 'https://marvel-flix-c3644575f8db.herokuapp.com/';

/**
 * Service to handle API requests related to user and movie data.
 * 
 * @service
 */
@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {

  constructor(private http: HttpClient) { }

  /**
   * Retrieves the token from local storage.
   * 
   * @returns {string} The authentication token.
   */
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

  /**
   * Extracts and returns response data.
   * 
   * @param {any} res The response object.
   * @returns {any} The response data.
   */
  private extractResponseData(res: any): any {
    return res || {};
  }

  /**
   * Registers a new user.
   * 
   * @param {any} userDetails The details of the user to register.
   * @returns {Observable<any>} An observable containing the response.
   */
  public registerUser(userDetails: any): Observable<any> {
    return this.http.post(`${apiUrl}users`, userDetails)
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Logs in a user.
   * 
   * @param {any} userDetails The login details of the user.
   * @returns {Observable<any>} An observable containing the response.
   */
  public loginUser(userDetails: any): Observable<any> {
    return this.http.post(`${apiUrl}login`, userDetails)
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Retrieves all movies.
   * 
   * @returns {Observable<any>} An observable containing the list of movies.
   */
  public getAllMovies(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}movies`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Retrieves a specific movie by ID.
   * 
   * @param {string} id The ID of the movie.
   * @returns {Observable<any>} An observable containing the movie details.
   */
  public getMovie(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}movies/${id}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Retrieves a specific director by ID.
   * 
   * @param {string} id The ID of the director.
   * @returns {Observable<any>} An observable containing the director details.
   */
  public getDirector(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}directors/${id}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Retrieves a specific genre by ID.
   * 
   * @param {string} id The ID of the genre.
   * @returns {Observable<any>} An observable containing the genre details.
   */
  public getGenre(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}genres/${id}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Retrieves a specific user by ID.
   * 
   * @param {string} id The ID of the user.
   * @returns {Observable<any>} An observable containing the user details.
   */
  public getUser(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}users/${id}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Retrieves favourite movies for a specific user.
   * 
   * @param {string} userId The ID of the user.
   * @returns {Observable<any>} An observable containing the list of favourite movies.
   */
  public getFavouriteMovies(userId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get(`${apiUrl}users/${userId}/favorites`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Adds a movie to a user's list of favourite movies.
   * 
   * @param {string} userId The ID of the user.
   * @param {string} movieId The ID of the movie to add.
   * @returns {Observable<any>} An observable containing the response.
   */
  public addToFavourites(userId: string, movieId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.post(`${apiUrl}users/${userId}/favorites/${movieId}`, {}, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Edits the details of a specific user.
   * 
   * @param {string} userId The ID of the user to edit.
   * @param {any} updatedData The updated user data.
   * @returns {Observable<any>} An observable containing the response.
   */
  public editUser(userId: string, updatedData: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.put(`${apiUrl}users/${userId}`, updatedData, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Deletes a specific user.
   * 
   * @param {string} userId The ID of the user to delete.
   * @returns {Observable<any>} An observable containing the response.
   */
  public deleteUser(userId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.delete(`${apiUrl}users/${userId}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Deletes a movie from a user's list of favourite movies.
   * 
   * @param {string} userId The ID of the user.
   * @param {string} movieId The ID of the movie to remove.
   * @returns {Observable<any>} An observable containing the response.
   */
  public deleteFromFavourites(userId: string, movieId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.delete(`${apiUrl}users/${userId}/favorites/${movieId}`, { headers })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Handles errors from HTTP requests.
   * 
   * @param {HttpErrorResponse} error The error response.
   * @returns {Observable<never>} An observable that throws an error message.
   */
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

  /**
   * Retrieves the profile of the current user.
   * 
   * @returns {Observable<any>} An observable containing the user profile.
   */
  public getUserProfile(): Observable<any> {
    const userId = this.getCurrentUserId();
    if (!userId) {
      return throwError('User ID not found');
    }
    return this.getUser(userId);
  }

  /**
   * Retrieves the current user's ID from local storage.
   * 
   * @returns {string | null} The user ID, or null if not found.
   */
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
