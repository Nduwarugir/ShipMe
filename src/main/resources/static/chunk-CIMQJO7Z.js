import {
  CommandeService,
  FormsModule,
  MatCommonModule,
  MatDialog,
  MatDialogActions,
  MatDialogModule,
  MatRippleModule,
  ReactiveFormsModule
} from "./chunk-QM6LZK6Q.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-O6V4Z6TL.js";

// node_modules/@angular/material/fesm2022/button.mjs
var MatButtonModule = /* @__PURE__ */ (() => {
  const _MatButtonModule = class _MatButtonModule {
  };
  _MatButtonModule.\u0275fac = function MatButtonModule_Factory(t) {
    return new (t || _MatButtonModule)();
  };
  _MatButtonModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatButtonModule
  });
  _MatButtonModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatRippleModule, MatCommonModule]
  });
  let MatButtonModule2 = _MatButtonModule;
  return MatButtonModule2;
})();

// node_modules/@angular/material/fesm2022/icon.mjs
var MatIconModule = /* @__PURE__ */ (() => {
  const _MatIconModule = class _MatIconModule {
  };
  _MatIconModule.\u0275fac = function MatIconModule_Factory(t) {
    return new (t || _MatIconModule)();
  };
  _MatIconModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatIconModule
  });
  _MatIconModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatCommonModule]
  });
  let MatIconModule2 = _MatIconModule;
  return MatIconModule2;
})();

// src/app/store/popup/popup.component.ts
function PopupComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h5", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "p", 7);
    \u0275\u0275text(7, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "p", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 6)(13, "p", 7);
    \u0275\u0275text(14, "Tag");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 9)(17, "p", 10);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 6)(20, "p", 7);
    \u0275\u0275text(21, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 9)(24, "p", 10);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 6)(27, "p", 7);
    \u0275\u0275text(28, "Prix Euro");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 9)(31, "p", 10);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 6)(34, "p", 7);
    \u0275\u0275text(35, "Prix Euro Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 9)(38, "p", 10);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 6)(41, "p", 7);
    \u0275\u0275text(42, "Prix FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 9)(45, "p", 10);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 6)(48, "p", 7);
    \u0275\u0275text(49, "Prix FCFA Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 9)(52, "p", 10);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 6)(55, "p", 7);
    \u0275\u0275text(56, "Poids");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 9)(59, "p", 10);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 6)(62, "p", 7);
    \u0275\u0275text(63, "Poids Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 9)(66, "p", 10);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const produit_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", produit_r1.label, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r1.label);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r1.tag);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r1.quantity);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r1.prix_euro);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r1.prix_euro_total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r1.prix_fcfa);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r1.prix_fcfa_total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r1.poids);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(produit_r1.poids_total);
  }
}
var PopupComponent = /* @__PURE__ */ (() => {
  const _PopupComponent = class _PopupComponent {
    // constructor(private matRef: MatDialogRef<PopupComponent>) { }
    constructor() {
    }
  };
  _PopupComponent.\u0275fac = function PopupComponent_Factory(t) {
    return new (t || _PopupComponent)();
  };
  _PopupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PopupComponent,
    selectors: [["app-popup"]],
    inputs: {
      listProducts: "listProducts"
    },
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [[1, "row", "row-cols-1", "row-cols-md-3", "mt-4"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], [1, "card", "border-primary", "h-100", 2, "border-radius", "10px"], [1, "card-body"], [1, "card-title", 2, "font-weight", "bolder", "font-size", "large"], [1, "col-sm-12"], [1, "mb-0"], [1, "mx-auto", 2, "height", "5px", "background-color", "black", "border-radius", "5px"], [1, "col-sm-12", "text-end"], [1, "card-text", "mb-0"]],
    template: function PopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275template(2, PopupComponent_div_2_Template, 68, 10, "div", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementContainerEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.listProducts);
      }
    },
    dependencies: [CommonModule, NgForOf],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let PopupComponent2 = _PopupComponent;
  return PopupComponent2;
})();

// src/app/store/store.component.ts
var _c0 = ["modal"];
function StoreComponent_div_6_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275element(7, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 17)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-dialog-actions")(16, "button", 18);
    \u0275\u0275listener("click", function StoreComponent_div_6_tr_19_Template_button_click_16_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r6);
      const commande_r4 = restoredCtx.$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.openDetail(commande_r4.produits));
    });
    \u0275\u0275elementStart(17, "span", 19);
    \u0275\u0275text(18, " Check product's list ");
    \u0275\u0275element(19, "i", 20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const commande_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(commande_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(commande_r4.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(commande_r4.prix_euro_total);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", commande_r4.prix_fcfa_total, " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", commande_r4.poids_total, " Kg");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", commande_r4.produits.length, " Products");
  }
}
function StoreComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 11)(2, "caption");
    \u0275\u0275text(3, "List of commands");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "thead", 12)(5, "tr")(6, "th", 13);
    \u0275\u0275text(7, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 13);
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 13);
    \u0275\u0275text(11, "Total EU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 13);
    \u0275\u0275text(13, "Total FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 13);
    \u0275\u0275text(15, "Total Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 13);
    \u0275\u0275text(17, "Check products list");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, StoreComponent_div_6_tr_19_Template, 20, 6, "tr", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r0.listCommandes);
  }
}
var StoreComponent = /* @__PURE__ */ (() => {
  const _StoreComponent = class _StoreComponent {
    constructor(commandeService, matDialog) {
      this.commandeService = commandeService;
      this.matDialog = matDialog;
    }
    ngOnInit() {
      this.commandeService.getAll().subscribe({
        next: (data) => {
          this.listCommandes = data;
        },
        error: (err) => {
          console.error("error: ", err.error);
        }
      });
      const modal = document.getElementById("modal");
      if (modal) {
        modal.addEventListener("click", function(event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });
      }
    }
    openDetail(products) {
      console.info("liste de produits: ", products);
      const modal = document.getElementById("modal");
      this.list = products;
      if (modal)
        modal.style.display = "block";
    }
  };
  _StoreComponent.\u0275fac = function StoreComponent_Factory(t) {
    return new (t || _StoreComponent)(\u0275\u0275directiveInject(CommandeService), \u0275\u0275directiveInject(MatDialog));
  };
  _StoreComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StoreComponent,
    selectors: [["app-store"]],
    viewQuery: function StoreComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modalRef = _t.first);
      }
    },
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 12,
    vars: 2,
    consts: [[1, "container", "h-100", 2, "padding-top", "3%"], [1, "card", "border-primary", 2, "height", "auto", "width", "100%"], [1, "card-header"], [1, "card-body"], ["class", "table-responsive-sm", "style", "overflow-x: auto; max-width: 100%;", 4, "ngIf"], ["id", "modal", 1, "modal", 2, "overflow", "auto", "max-height", "100vh"], ["modal", ""], [1, "modal-content"], ["modalContent", ""], [3, "listProducts"], [1, "table-responsive-sm", 2, "overflow-x", "auto", "max-width", "100%"], [1, "table", "table-hover", "table-striped"], [1, "table-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "bi", "bi-currency-euro"], [1, "d-flex", "justify-content-between"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "badge", "badge-primary"], [1, "bi", "bi-view-list"]],
    template: function StoreComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2);
        \u0275\u0275text(4, " Liste des commandes enregistr\xE9es ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275template(6, StoreComponent_div_6_Template, 20, 1, "div", 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementStart(7, "div", 5, 6)(9, "div", 7, 8);
        \u0275\u0275element(11, "app-popup", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.listCommandes);
        \u0275\u0275advance(5);
        \u0275\u0275property("listProducts", ctx.list);
      }
    },
    dependencies: [FormsModule, NgForOf, NgIf, MatDialogModule, MatDialogActions, MatButtonModule, MatIconModule, ReactiveFormsModule, PopupComponent],
    styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: none;\n}\n.modal-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  width: 50%;\n  height: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  background: none;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zdG9yZS9zdG9yZS5jb21wb25lbnQuc2NzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG4ubW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9kYWwtY29udGVudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsQ0FBQTtBQUNJLFlBQUE7QUFDQSxPQUFBO0FBQ0EsUUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0Esb0JBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQTtBQUNBLFdBQUE7O0FBR0osQ0FBQTtBQUNJLFlBQUE7QUFDQSxPQUFBO0FBQ0EsUUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsYUFBQSxVQUFBLElBQUEsRUFBQTtBQUNBLFdBQUE7QUFDQSxtQkFBQTtBQUNBLGlCQUFBO0FBQ0EsY0FBQTtBQUNBLFVBQUE7OyIsCiAgIm5hbWVzIjogW10KfQo= */"]
  });
  let StoreComponent2 = _StoreComponent;
  return StoreComponent2;
})();
export {
  StoreComponent
};
//# sourceMappingURL=chunk-CIMQJO7Z.js.map
