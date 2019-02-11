import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Quarto } from '../shared/Quarto';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

// const apiUrl = "http://localhost:3000/quartos";
@Injectable({
  providedIn: 'root'
})
export class QuartoApiService {
  // private BASE_URL: string = environment.baseUrl;
  private BASE_URL: string = "http://localhost:8085/project-hotel";
  private apiUrl = `${this.BASE_URL}/quartos`;

  constructor(private http: HttpClient) { }

  getQuartos(): Observable<Quarto[]>{
    return this.http.get<Quarto[]>(this.apiUrl).pipe(
      tap(quartos => console.log('fetched quartos' + quartos)),
      catchError(this.handleError('getQuartos', []))
    );
  }

  addQuartos(quarto: Quarto): Observable<Quarto>{
    return this.http.post<Quarto>(this.apiUrl, quarto, httpOptions).pipe(
      tap((quarto: Quarto) => console.log('Adicionou o quarto' + quarto)),
      catchError(this.handleError<Quarto>('addQuartos'))
    );
  }

  updateQuarto(id: number, quarto: Quarto): Observable<any>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, quarto, httpOptions).pipe(
      tap(quarto => console.log(`alteracao de quartos por id=${id}`)),
      catchError(this.handleError<any>('updateQuarto'))
    );
  }

  getQuartoPorId(id: number): Observable<Quarto>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Quarto>(url).pipe(
      tap(quarto => console.log(`Busca quarto pelo id=${id}`)),
      catchError(this.handleError<Quarto>(`busca quartos por id=${id}`))
    );
  }

  deleteQuarto(id: number): Observable<Quarto>{
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Quarto>(url, httpOptions).pipe(
      tap(quarto => console.log(`Deleta quarto por id=${id}`)),
      catchError(this.handleError<Quarto>('deleteQuarto'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
