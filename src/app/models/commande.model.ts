import { Product } from "./product.model";
import {commission, marge, value_kg} from "./global.const.model";

export interface Commande {
    id: number,
    date: Date,
    produits: Product[],
    prix_euro_total: number;
    prix_fcfa_total: number;
    poids_total: number;
    total_import: number;
    // value_fcfa: number;
}

export class CommandeClass {
    id!: number;
    date!: Date;
    produits: Product[];
    prix_euro_total: number = 0;
    prix_fcfa_total: number = 0;
    poids_total: number = 0;
    total_import: number = 0;

    constructor(listProduit: Product[]) {
        this.date = new Date();
        this.produits = listProduit;
        listProduit.forEach( produit => {
            this.prix_euro_total += produit.prix_euro_total;
            this.prix_fcfa_total += produit.prix_fcfa_total;
            this.poids_total += produit.poids_total;
        });
        this.total_import = this.prix_fcfa_total + (commission * this.prix_fcfa_total) + marge + (this.poids_total * value_kg);
    }
}
