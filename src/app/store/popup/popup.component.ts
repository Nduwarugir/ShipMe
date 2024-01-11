import {Component, Input} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-popup',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './popup.component.html',
    styleUrl: './popup.component.scss'
})
export class PopupComponent {

    @Input('listProducts') listProducts!: Product[];

    // constructor(private matRef: MatDialogRef<PopupComponent>) { }
    constructor() { }

}
