import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../models/product.model';
import {commission, marge, value_euro, value_kg} from '../models/global.const.model';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {PopupComponent} from "./popup/popup.component";
import { CommandeClass } from '../models/commande.model';
import { CommandeService } from '../services/commmande/commande.service';
import { Response } from 'express';

@Component({
    selector: 'app-calc',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
    templateUrl: './calc.component.html',
    styleUrl: './calc.component.scss'
})
export class CalcComponent implements OnInit {

    form!: FormGroup;
    produit!: Product;
    produits!: Product[];
    commande!: CommandeClass;

    protected readonly value_euro: number = value_euro;
    protected readonly value_kg: number = value_kg;
    protected readonly marge: number = marge;
    protected readonly commission: number = commission;
    protected total!: number;
    protected total_all: number = 0;

    constructor(private fb: FormBuilder, private matDialog: MatDialog, private commandeService: CommandeService) {
        this.form = this.fb.group({
            label: ['', [Validators.required, Validators.minLength(3)]],
            tag: ['', [Validators.required, Validators.minLength(3)]],
            quantity: ['', [Validators.required]],
            prix_euro: ['', [Validators.required]],
            poids: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.form.valueChanges.subscribe((value) => {
            this.calc(value.label, value.tag, value.quantity, value.prix_euro, value.poids)
        });
    }

    onSubmit() {
        if (this.form.valid) {
            if (this.produits) this.produits.push(this.produit);
            else this.produits = [this.produit];
            this.total_all += this.total;
            console.log('produits: ', this.produits);
        }
    }

    save() {
        if (!this.produits) {
            this.onSubmit();
        }
        this.commande = new CommandeClass(this.produits);
        this.commandeService.create(this.commande).subscribe({
            next: (response) => {
                console.log('response: ', response);
            },
            error: err => {
                if (err.status !== 200) {
                    console.info('error: ', err);
                } else
                    console.log('response: ', err.error.message);

            }
        });
    }

    calc(label: string, tag: string, quantity: number, prix_euro: number, poids: number) {
        this.produit = {
            label: label,
            tag: tag,
            quantity: quantity,
            prix_euro: prix_euro,
            prix_euro_total: prix_euro * quantity,
            prix_fcfa: prix_euro * this.value_euro,
            prix_fcfa_total: prix_euro * quantity * this.value_euro,
            poids: poids,
            poids_total: poids * quantity,
        }
        this.total = this.produit.prix_fcfa_total + (this.commission * this.produit.prix_fcfa_total) + this.marge + (this.produit.poids_total * this.value_kg);
    }

    openDialog(): void {
        const dialogRef = this.matDialog.open(PopupComponent, {
            width: '400px', // Définissez la largeur souhaitée
            // Autres options de configuration...
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Résultat de la boîte de dialogue :', result);
        });
    }

    openPopup(): void {
        this.matDialog.open(PopupComponent, {
            width: '400px', // Définissez la largeur souhaitée
            // Autres options de configuration...
        });
    }

}
