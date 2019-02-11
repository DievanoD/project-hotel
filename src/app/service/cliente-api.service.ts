import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cliente } from '../shared/Cliente';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClienteApiService {

  private BASE_URL: string = "http://localhost:8085/project-hotel";
  private apiUrl = `${this.BASE_URL}/clientes`;

  constructor(private http: HttpClient) { }

  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl).pipe(
      tap(cliente => console.log('Trouxe os clientes' + cliente)),
      catchError(this.handleError('getCliente', []))
    );
  }

  addCliente(cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente, httpOptions).pipe(
      tap((cliente: Cliente) => console.log('adicionou o cliente' + cliente)),
      catchError(this.handleError<Cliente>('addCliente'))
    );
  }

  updateCliente(id: number, cliente: Cliente): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, cliente, httpOptions).pipe(
      tap(cliente => console.log(`updated cliente id=${id}`)),
      catchError(this.handleError<any>('updateCliente'))
    );
  }

  getClientePorId(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      tap(cliente => console.log(`busca cliente pelo id=${id}`)),
      catchError(this.handleError<Cliente>(`busca fimes por id=${id}`))
    );
  }

  deleteCliente(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Cliente>(url, httpOptions).pipe(
      tap(cliente => console.log(`deleta cliente por id=${id}`)),
      catchError(this.handleError<Cliente>('deleteCliente'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
