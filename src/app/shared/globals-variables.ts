import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GlobalsVariables {
    isConnected!: Boolean;
    isLoading = false;
}
