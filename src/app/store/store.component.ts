import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommandeService} from "../services/commmande/commande.service";
import {Commande} from "../models/commande.model";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import { Product } from '../models/product.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PopupComponent } from './popup/popup.component';

@Component({
    selector: 'app-store',
    standalone: true,
    templateUrl: './store.component.html',
    styleUrl: './store.component.scss',
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        PopupComponent
    ]
})
export class StoreComponent implements OnInit{

    listCommandes!: Commande[];
    list!: Product[];

    @ViewChild('modal') modalRef!: ElementRef;

    constructor(private commandeService: CommandeService, private matDialog: MatDialog) {}

    ngOnInit(): void {
        this.commandeService.getAll().subscribe({
            next: data => {
                this.listCommandes = data;
            },
            error: err => {
                console.error('error: ', err.error);
            }
        });

        // Récupérez la référence de la fenêtre modale
        // const modal: HTMLInputElement = this.modalRef.nativeElement;
        const modal = document.getElementById('modal');

        // Ajoutez un gestionnaire d'événement pour fermer la fenêtre modale lorsque l'utilisateur clique en dehors de celle-ci
        if (modal) {
            modal.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }

    openDetail(products: Product[]) {
        console.info('liste de produits: ', products);
        const modal = document.getElementById('modal');
        this.list = products;

        if (modal) modal.style.display = 'block';


        // const dialogRef = this.matDialog.open(PopupComponent, {
        //     width: '400px',
        // });

        // dialogRef.afterClosed().subscribe(result => {
        //     console.log('Résultat de la boîte de dialogue :', result);
        // });
    }

    floor = (n: number) => {
        if (n % 3 === 0)
            return n/3-1
        else
            return Math.floor(n/3)
    }

}
