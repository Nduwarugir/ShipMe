import {value_euro} from "./global.const.model";

export interface Product {
    label: string;
    tag: string;
    quantity: number;
    prix_euro: number;
    prix_euro_total: number;
    prix_fcfa: number;
    prix_fcfa_total: number;
    poids: number;
    poids_total: number;
    // value_euro: number;
}

export class Product2 {
    id!: number;
    label!: string;
    tag!: string;
    quantity!: number;
    prix_euro!: number;
    prix_euro_total!: number;
    prix_fcfa!: number;
    prix_fcfa_total!: number;
    poids!: number;
    poids_total!: number;

    constructor(
        label: string,
        tag: string,
        quantity: number,
        prix_euro: number,
        poids: number,
    ) {
        this.label = label;
        this.tag = tag;
        this.quantity = quantity;
        this.poids = poids;
        this.prix_euro = prix_euro;
        this.prix_euro_total = prix_euro * quantity;
        this.prix_fcfa = prix_euro * value_euro;
        this.prix_fcfa_total = this.prix_euro_total * value_euro;
        this.poids_total = poids * quantity;
    }
}
