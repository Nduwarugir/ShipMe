import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { Commande } from '../../models/commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

    constructor(private httpClient: HttpClient) { }

    // private readonly API_URL = `http://${this.param.picoIp}:80`;
    private readonly API_URL = "http://localhost:8080/api/commandes/";

    private readonly ENDPOINT_CREATE = "create";

    private readonly ENDPOINT_UPDATE = "update/";

    private readonly ENDPOINT_DELETE = "delete/";

    private readonly ENDPOINT_DESACTIVATE = "desactivate/";

    private readonly ENDPOINT_READ = "read/";

    httpOptions = {
        headers: new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        responseType: 'text' as 'json'
    };

    create(commande: Commande) {
        return this.httpClient.post<string>(this.API_URL + this.ENDPOINT_CREATE, commande, this.httpOptions).pipe(
            tap(data => console.log("data: ", data)),
            catchError(this.handleError)
        );
    }

    update(id: number, commande: Commande): Observable<Commande> {
        return this.httpClient.put<Commande>(this.API_URL + this.ENDPOINT_UPDATE + id, commande).pipe(
            tap(data => console.log("data: ", data)),
            catchError(this.handleError)
        );
    }

    delete(id: number): Observable<Commande> {
        return this.httpClient.delete<Commande>(this.API_URL + this.ENDPOINT_DELETE + id).pipe(
            tap(data => console.log("data: ", data)),
            catchError(this.handleError)
        );
    }

    desactivate(id: number): Observable<Commande> {
        return this.httpClient.delete<Commande>(this.API_URL + this.ENDPOINT_DESACTIVATE + id).pipe(
            tap(data => console.log("data: ", data)),
            catchError(this.handleError)
        );
    }

    getAll() {
        return this.httpClient.get<any>(this.API_URL + this.ENDPOINT_READ + 'all').pipe(
            tap(data => console.log("data: ", data)),
            catchError(this.handleError)
        );
    }

    getById(id: number) {
        return this.httpClient.get<any>(this.API_URL + this.ENDPOINT_READ + 'id/' + id).pipe(
            tap(data => console.log("data: ", data)),
            catchError(this.handleError)
        );
    }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error("An error has occured", error.error.message);
        } else {
            console.error(
                `Back error code: ${error.status}`,
                `Error body: ${error.error}`
            );
        }
        return throwError('Try again later please');
    }
}
