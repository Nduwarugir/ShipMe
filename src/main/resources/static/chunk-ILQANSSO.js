import {
  CommandeService,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-QM6LZK6Q.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O6V4Z6TL.js";

// src/app/models/global.const.model.ts
var value_euro = 700;
var value_kg = 1e4;
var marge = 1e4;
var commission = 0.1;

// src/app/calc/popup/popup.component.ts
var PopupComponent = /* @__PURE__ */ (() => {
  const _PopupComponent = class _PopupComponent {
    ngOnInit() {
    }
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
  };
  _PopupComponent.\u0275fac = function PopupComponent_Factory(t) {
    return new (t || _PopupComponent)(\u0275\u0275directiveInject(MatDialogRef));
  };
  _PopupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PopupComponent,
    selectors: [["app-popup"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 3,
    vars: 0,
    template: function PopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Contenu de la bo\xEEte de dialogue");
        \u0275\u0275elementEnd();
        \u0275\u0275text(2, "\n```\n");
      }
    },
    dependencies: [FormsModule, ReactiveFormsModule],
    styles: ["\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jYWxjL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5zY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBFeGVtcGxlIGRlIHN0eWxlcyBwb3VyIGxhIGJvw650ZSBkZSBkaWFsb2d1ZVxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLy8gQXV0cmVzIHN0eWxlcy4uLlxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLENBQUE7QUFDSSxvQkFBQTtBQUNBLFdBQUE7OyIsCiAgIm5hbWVzIjogW10KfQo= */"]
  });
  let PopupComponent2 = _PopupComponent;
  return PopupComponent2;
})();

// src/app/models/commande.model.ts
var CommandeClass = class {
  constructor(listProduit) {
    this.prix_euro_total = 0;
    this.prix_fcfa_total = 0;
    this.poids_total = 0;
    this.total_import = 0;
    this.date = /* @__PURE__ */ new Date();
    this.produits = listProduit;
    listProduit.forEach((produit) => {
      this.prix_euro_total += produit.prix_euro_total;
      this.prix_fcfa_total += produit.prix_fcfa_total;
      this.poids_total += produit.poids_total;
    });
    this.total_import = this.prix_fcfa_total + commission * this.prix_fcfa_total + marge + this.poids_total * value_kg;
  }
};

// src/app/calc/calc.component.ts
function CalcComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 27)(3, "h5", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33)(6, "p", 34);
    \u0275\u0275text(7, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 36)(10, "p", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 33)(13, "p", 34);
    \u0275\u0275text(14, "Tag");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 36)(17, "p", 37);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "p", 34);
    \u0275\u0275text(21, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 36)(24, "p", 37);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 33)(27, "p", 34);
    \u0275\u0275text(28, "Prix Euro");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 36)(31, "p", 37);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 33)(34, "p", 34);
    \u0275\u0275text(35, "Prix Euro Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 36)(38, "p", 37);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 33)(41, "p", 34);
    \u0275\u0275text(42, "Prix FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 36)(45, "p", 37);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 33)(48, "p", 34);
    \u0275\u0275text(49, "Prix FCFA Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 36)(52, "p", 37);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 33)(55, "p", 34);
    \u0275\u0275text(56, "Poids");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 36)(59, "p", 37);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 33)(62, "p", 34);
    \u0275\u0275text(63, "Poids Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 36)(66, "p", 37);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const produit_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", produit_r3.label, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r3.label);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r3.tag);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r3.quantity);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r3.prix_euro);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r3.prix_euro_total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r3.prix_fcfa);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r3.prix_fcfa_total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r3.poids);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r3.poids_total);
  }
}
function CalcComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 33)(2, "p", 34);
    \u0275\u0275text(3, "Valeur de l'euro");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39)(6, "p", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 33)(9, "p", 34);
    \u0275\u0275text(10, "Frais de commission");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 39)(13, "p", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 33)(16, "p", 34);
    \u0275\u0275text(17, "Marge");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 40)(20, "p", 37);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 33)(23, "p", 34);
    \u0275\u0275text(24, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 36)(27, "p", 37);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 33)(30, "p", 34);
    \u0275\u0275text(31, "Tag");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 36)(34, "p", 37);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 33)(37, "p", 34);
    \u0275\u0275text(38, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 36)(41, "p", 37);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 33)(44, "p", 34);
    \u0275\u0275text(45, "Prix Euro");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 36)(48, "p", 37);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 33)(51, "p", 34);
    \u0275\u0275text(52, "Prix Euro Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 36)(55, "p", 37);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 33)(58, "p", 34);
    \u0275\u0275text(59, "Prix FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 36)(62, "p", 37);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 33)(65, "p", 34);
    \u0275\u0275text(66, "Prix FCFA Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 36)(69, "p", 37);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 33)(72, "p", 34);
    \u0275\u0275text(73, "Poids");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 36)(76, "p", 37);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 33)(79, "p", 34);
    \u0275\u0275text(80, "Poids Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 36)(83, "p", 37);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 41)(86, "p", 34);
    \u0275\u0275text(87, "Total Importation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(88, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 36)(90, "p", 37);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.value_euro);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.commission);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.marge);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.produit.label);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.produit.tag);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.produit.quantity);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.produit.prix_euro);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.produit.prix_euro_total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.produit.prix_fcfa);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.produit.prix_fcfa_total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.produit.poids);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.produit.poids_total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.total);
  }
}
function CalcComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 5);
    \u0275\u0275text(2, " Detail de la commande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "h5", 7);
    \u0275\u0275text(5, "R\xE9capitulatif de la commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 38)(7, "div", 33)(8, "p", 34);
    \u0275\u0275text(9, "Nombre de produit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 39)(12, "p", 37);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 33)(15, "p", 34);
    \u0275\u0275text(16, "Somme totale de l'importation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 39)(19, "p", 37);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r2.produits.length);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.total_all);
  }
}
var CalcComponent = /* @__PURE__ */ (() => {
  const _CalcComponent = class _CalcComponent {
    constructor(fb, matDialog, commandeService) {
      this.fb = fb;
      this.matDialog = matDialog;
      this.commandeService = commandeService;
      this.value_euro = value_euro;
      this.value_kg = value_kg;
      this.marge = marge;
      this.commission = commission;
      this.total_all = 0;
      this.form = this.fb.group({
        label: ["", [Validators.required, Validators.minLength(3)]],
        tag: ["", [Validators.required, Validators.minLength(3)]],
        quantity: ["", [Validators.required]],
        prix_euro: ["", [Validators.required]],
        poids: ["", [Validators.required]]
      });
    }
    ngOnInit() {
      this.form.valueChanges.subscribe((value) => {
        this.calc(value.label, value.tag, value.quantity, value.prix_euro, value.poids);
      });
    }
    onSubmit() {
      if (this.form.valid) {
        if (this.produits)
          this.produits.push(this.produit);
        else
          this.produits = [this.produit];
        this.total_all += this.total;
        console.log("produits: ", this.produits);
      }
    }
    save() {
      if (!this.produits) {
        this.onSubmit();
      }
      this.commande = new CommandeClass(this.produits);
      this.commandeService.create(this.commande).subscribe({
        next: (response) => {
          console.log("response: ", response);
        },
        error: (err) => {
          if (err.status !== 200) {
            console.info("error: ", err);
          } else
            console.log("response: ", err.error.message);
        }
      });
    }
    calc(label, tag, quantity, prix_euro, poids) {
      this.produit = {
        label,
        tag,
        quantity,
        prix_euro,
        prix_euro_total: prix_euro * quantity,
        prix_fcfa: prix_euro * this.value_euro,
        prix_fcfa_total: prix_euro * quantity * this.value_euro,
        poids,
        poids_total: poids * quantity
      };
      this.total = this.produit.prix_fcfa_total + this.commission * this.produit.prix_fcfa_total + this.marge + this.produit.poids_total * this.value_kg;
    }
    openDialog() {
      const dialogRef = this.matDialog.open(PopupComponent, {
        width: "400px"
        // Définissez la largeur souhaitée
        // Autres options de configuration...
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log("R\xE9sultat de la bo\xEEte de dialogue :", result);
      });
    }
    openPopup() {
      this.matDialog.open(PopupComponent, {
        width: "400px"
        // Définissez la largeur souhaitée
        // Autres options de configuration...
      });
    }
  };
  _CalcComponent.\u0275fac = function CalcComponent_Factory(t) {
    return new (t || _CalcComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(CommandeService));
  };
  _CalcComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CalcComponent,
    selectors: [["app-calc"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 53,
    vars: 6,
    consts: [[1, "container", "h-100", 2, "padding-top", "3%"], [1, "card-group", "mx-auto", "my-auto"], [1, "col-lg-7", "me-3"], [3, "formGroup", "ngSubmit"], [1, "card", "border-primary", 2, "height", "auto", "width", "100%"], [1, "card-header"], [1, "card-body", 2, "height", "100%"], [1, "card-title"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "form-group"], ["for", "label"], ["type", "text", "id", "label", "placeholder", "Label", "formControlName", "label", 1, "form-control"], ["for", "tag"], ["type", "text", "id", "tag", "placeholder", "Tag", "formControlName", "tag", 1, "form-control"], ["for", "quantity"], ["type", "number", "id", "quantity", "placeholder", "Quantity", "formControlName", "quantity", 1, "form-control"], ["for", "prix_euro"], ["type", "number", "id", "prix_euro", "placeholder", "Prix Euro", "formControlName", "prix_euro", 1, "form-control"], ["for", "poids"], ["type", "number", "id", "poids", "placeholder", "Poids", "formControlName", "poids", 1, "form-control"], ["hidden", "", 1, "d-flex", "justify-content-end", "me-3", "mt-3", "mb-2", "mb-lg-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "gradient-custom-2", "border", "border-color-none", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "gradient-custom-2", "border", "border-color-none", 3, "disabled", "click"], [1, "row", "row-cols-1", "row-cols-md-3", "mt-4"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "ms-3"], [1, "card-body"], ["class", "row", 4, "ngIf"], ["class", "card border-primary mt-3", "style", "height: auto; width: 100%;", 4, "ngIf"], [1, "col", "mb-4"], [1, "card", "border-primary", "h-100", 2, "border-radius", "10px"], [1, "card-title", 2, "font-weight", "bolder", "font-size", "large"], [1, "col-sm-12"], [1, "mb-0"], [1, "mx-auto", 2, "height", "5px", "background-color", "black", "border-radius", "5px"], [1, "col-sm-12", "text-end"], [1, "card-text", "mb-0"], [1, "row"], [1, "col-sm-12", "text-end", "mb-1"], [1, "col-sm-12", "text-end", "mb-3"], [1, "col-sm-12", "mt-3"], [1, "card", "border-primary", "mt-3", 2, "height", "auto", "width", "100%"]],
    template: function CalcComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "form", 3);
        \u0275\u0275listener("ngSubmit", function CalcComponent_Template_form_ngSubmit_4_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
        \u0275\u0275text(7, " Table ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "h5", 7);
        \u0275\u0275text(10, "Enter Your Data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "ul", 8)(12, "li", 9)(13, "div", 10)(14, "label", 11);
        \u0275\u0275text(15, "Label");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "li", 9)(18, "div", 10)(19, "label", 13);
        \u0275\u0275text(20, "Tag");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "li", 9)(23, "div", 10)(24, "label", 15);
        \u0275\u0275text(25, "Quantity");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "input", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "li", 9)(28, "div", 10)(29, "label", 17);
        \u0275\u0275text(30, "Prix Euro");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "li", 9)(33, "div", 10)(34, "label", 19);
        \u0275\u0275text(35, "Poids");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 21)(38, "button", 22);
        \u0275\u0275text(39, "Enregistrer ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 23);
        \u0275\u0275listener("click", function CalcComponent_Template_button_click_40_listener() {
          return ctx.save();
        });
        \u0275\u0275text(41, "Sauvegarder ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(42, "div", 24);
        \u0275\u0275template(43, CalcComponent_div_43_Template, 68, 10, "div", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 26)(45, "div", 4)(46, "div", 5);
        \u0275\u0275text(47, " Recap ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 27)(49, "h5", 7);
        \u0275\u0275text(50, "R\xE9capitulatif");
        \u0275\u0275elementEnd();
        \u0275\u0275template(51, CalcComponent_div_51_Template, 92, 13, "div", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(52, CalcComponent_div_52_Template, 21, 2, "div", 29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementContainerEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(34);
        \u0275\u0275property("disabled", ctx.form.invalid);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.invalid && !ctx.produits);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.produits);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.produit);
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.produits);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatDialogModule],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let CalcComponent2 = _CalcComponent;
  return CalcComponent2;
})();
export {
  CalcComponent
};
//# sourceMappingURL=chunk-ILQANSSO.js.map
