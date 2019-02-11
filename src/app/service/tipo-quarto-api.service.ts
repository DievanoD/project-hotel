import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TipoQuarto } from '../shared/TipoQuarto';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TipoQuartoApiService {
  private BASE_URL: string = "http://localhost:8085/project-hotel";
  private apiUrl = `${this.BASE_URL}/tipoquarto`;

  constructor(private http: HttpClient) { }

  getTipoQuarto(): Observable<TipoQuarto[]>{
    return this.http.get<TipoQuarto[]>(this.apiUrl).pipe(
      tap(tipoQuartos => console.log('fetched tipoQuartos' + tipoQuartos)),
      catchError(this.handleError('getTipoQuartos', []))
    );
  }

  addTipoQuartos(tipoQuarto: TipoQuarto): Observable<TipoQuarto>{
    return this.http.post<TipoQuarto>(this.apiUrl, tipoQuarto, httpOptions).pipe(
      tap((tipoQuarto: TipoQuarto) => console.log('Adicionou o tipoQuarto' + tipoQuarto)),
      catchError(this.handleError<TipoQuarto>('addTipoQuartos'))
    );
  }

  updateTipoQuarto(id: number, tipoQuarto: TipoQuarto): Observable<any>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, tipoQuarto, httpOptions).pipe(
      tap(tipoQuarto => console.log(`alteracao de tipoQuartos por id=${id}`)),
      catchError(this.handleError<any>('updateTipoQuarto'))
    );
  }

  getTipoQuartoPorId(id: number): Observable<TipoQuarto>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<TipoQuarto>(url).pipe(
      tap(tipoQuarto => console.log(`Busca tipoQuarto pelo id=${id}`)),
      catchError(this.handleError<TipoQuarto>(`busca tipoQuartos por id=${id}`))
    );
  }

  deleteTipoQuarto(id: number): Observable<TipoQuarto>{
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<TipoQuarto>(url, httpOptions).pipe(
      tap(tipoQuarto => console.log(`Deleta tipoQuarto por id=${id}`)),
      catchError(this.handleError<TipoQuarto>('deleteTipoQuarto'))
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
