import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Product} from "../../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor(private httpClient: HttpClient) { }

    // private readonly API_URL = `http://${this.param.picoIp}:80`;
    private readonly API_URL = "http://localhost:8080/api/produits/";

    private readonly ENDPOINT_CREATE = "create";

    private readonly ENDPOINT_UPDATE = "update/";

    private readonly ENDPOINT_DELETE = "delete/";

    private readonly ENDPOINT_DESACTIVATE = "desactivate/";

    private readonly ENDPOINT_READ = "read/";

    create(product: Product): Observable<Product> {
        tap(data => console.log("data: ", data))
        catchError(this.handleError);
        return this.httpClient.post<Product>(this.API_URL + this.ENDPOINT_CREATE, product);
    }

    update(id: number, product: Product): Observable<Product> {
        tap(data => console.log("data: ", data))
        catchError(this.handleError);
        return this.httpClient.put<Product>(this.API_URL + this.ENDPOINT_UPDATE + id, product);
    }

    delete(id: number): Observable<Product> {
        tap(data => console.log("data: ", data))
        catchError(this.handleError);
        return this.httpClient.delete<Product>(this.API_URL + this.ENDPOINT_DELETE + id);
    }

    desactivate(id: number): Observable<Product> {
        tap(data => console.log("data: ", data))
        catchError(this.handleError);
        return this.httpClient.delete<Product>(this.API_URL + this.ENDPOINT_DESACTIVATE + id);
    }

    getAll() {
        tap(data => console.log("data: ", data))
        catchError(this.handleError);
        return this.httpClient.get<any>(this.API_URL + this.ENDPOINT_READ + 'all');
    }

    getById(id: number) {
        tap(data => console.log("data: ", data))
        catchError(this.handleError);
        return this.httpClient.get<any>(this.API_URL + this.ENDPOINT_READ + 'id/' + id);
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
