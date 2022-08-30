import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Input } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class NgxBpExampleService {
    constructor() { }
}
NgxBpExampleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NgxBpExampleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxBpExampleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NgxBpExampleService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NgxBpExampleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxBpExampleComponent {
    constructor() { }
    ngOnInit() {
    }
}
NgxBpExampleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NgxBpExampleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxBpExampleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.3", type: NgxBpExampleComponent, selector: "ngx-bp", ngImport: i0, template: `
    <p>
      ngx-bp-example works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NgxBpExampleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-bp', template: `
    <p>
      ngx-bp-example works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class NgxBpExampleModule {
}
NgxBpExampleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NgxBpExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxBpExampleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.3", ngImport: i0, type: NgxBpExampleModule, declarations: [NgxBpExampleComponent], exports: [NgxBpExampleComponent] });
NgxBpExampleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NgxBpExampleModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NgxBpExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxBpExampleComponent
                    ],
                    imports: [],
                    exports: [
                        NgxBpExampleComponent
                    ]
                }]
        }] });

class HeaderComponent {
    constructor() {
        this.links = []; //dec de datos entrantes
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.3", type: HeaderComponent, selector: "ngx-bp-header", inputs: { links: "links" }, ngImport: i0, template: "<div class=\"ngx-header\">\n  <div class=\"block\">\n    <ng-content select=\"[logo]\"></ng-content>\n  </div>\n  <div class=\"block\">\n    <ul>\n      <li [routerLink]=\"item.router\"\n        *ngFor=\"let item of links\">\n      {{item.name}}\n      </li>\n    </ul>\n  </div>\n</div>\n", styles: [".ngx-header{display:grid;grid-template-columns:2fr 3fr;padding:0 35px;height:60px;box-shadow:var(--ngx-bp-example-shadow-1);color:#000}.ngx-header .block{display:flex;align-content:center;align-items:center}.ngx-header .block ul{list-style:none;margin:0;padding:0;display:flex;gap:20px}.ngx-header .block ul li{padding:0}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-bp-header', template: "<div class=\"ngx-header\">\n  <div class=\"block\">\n    <ng-content select=\"[logo]\"></ng-content>\n  </div>\n  <div class=\"block\">\n    <ul>\n      <li [routerLink]=\"item.router\"\n        *ngFor=\"let item of links\">\n      {{item.name}}\n      </li>\n    </ul>\n  </div>\n</div>\n", styles: [".ngx-header{display:grid;grid-template-columns:2fr 3fr;padding:0 35px;height:60px;box-shadow:var(--ngx-bp-example-shadow-1);color:#000}.ngx-header .block{display:flex;align-content:center;align-items:center}.ngx-header .block ul{list-style:none;margin:0;padding:0;display:flex;gap:20px}.ngx-header .block ul li{padding:0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { links: [{
                type: Input
            }] } });

class UiHeaderModule {
}
UiHeaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: UiHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UiHeaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.3", ngImport: i0, type: UiHeaderModule, declarations: [HeaderComponent], imports: [CommonModule, i1$1.RouterModule], exports: [HeaderComponent] });
UiHeaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: UiHeaderModule, imports: [CommonModule,
        RouterModule.forRoot([])] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: UiHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HeaderComponent
                    ],
                    imports: [
                        CommonModule,
                        RouterModule.forRoot([])
                    ],
                    exports: [
                        HeaderComponent
                    ]
                }]
        }] });

class InputComponent {
    constructor() {
        this.minLength = 5;
        this.label = 'Label';
        this.placeholder = 'Label';
        this.value = '';
    }
    ngOnInit() {
    }
    checkValid() {
        if (this.value.length >= this.minLength) {
            return true;
        }
        return false;
    }
}
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.3", type: InputComponent, selector: "ngx-bp-input", inputs: { minLength: "minLength", label: "label", placeholder: "placeholder" }, ngImport: i0, template: "<label for=\"input\">{{label}}</label>\r\n<input id=\"input\" type=\"text\" class=\"input\" [placeholder]=\"placeholder\" [(ngModel)]=\"value\"\r\n  [ngClass]=\"checkValid() ? 'valid' : 'invalid'\">\r\n", styles: [".input{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}.valid{border:1px solid green}.invalid{border:1px solid red}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-bp-input', template: "<label for=\"input\">{{label}}</label>\r\n<input id=\"input\" type=\"text\" class=\"input\" [placeholder]=\"placeholder\" [(ngModel)]=\"value\"\r\n  [ngClass]=\"checkValid() ? 'valid' : 'invalid'\">\r\n", styles: [".input{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}.valid{border:1px solid green}.invalid{border:1px solid red}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { minLength: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }] } });

class UiInputModule {
}
UiInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: UiInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UiInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.3", ngImport: i0, type: UiInputModule, declarations: [InputComponent], imports: [CommonModule, i1$1.RouterModule, FormsModule], exports: [InputComponent] });
UiInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: UiInputModule, imports: [CommonModule,
        RouterModule.forRoot([]),
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: UiInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        InputComponent
                    ],
                    imports: [
                        CommonModule,
                        RouterModule.forRoot([]),
                        FormsModule
                    ],
                    exports: [
                        InputComponent
                    ]
                }]
        }] });

class CardComponent {
    constructor() {
        this.imageUrl = 'https://concepto.de/wp-content/uploads/2015/03/paisaje-800x409.jpg';
        this.title = 'Title';
        this.description = 'Description';
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.3", type: CardComponent, selector: "ngx-bp-card", inputs: { imageUrl: "imageUrl", title: "title", description: "description" }, ngImport: i0, template: "<div class=\"card\">\r\n  <img [src]=\"imageUrl\" alt=\"Avatar\" style=\"width:100%\">\r\n  <div class=\"text\">\r\n    <h4><b>{{title}}</b></h4>\r\n    <p>{{description}}</p>\r\n  </div>\r\n</div>\r\n", styles: [".card{box-shadow:0 4px 8px #0003;transition:.3s;width:40%}.card:hover{box-shadow:0 8px 16px #0003}.text{padding:2px 16px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-bp-card', template: "<div class=\"card\">\r\n  <img [src]=\"imageUrl\" alt=\"Avatar\" style=\"width:100%\">\r\n  <div class=\"text\">\r\n    <h4><b>{{title}}</b></h4>\r\n    <p>{{description}}</p>\r\n  </div>\r\n</div>\r\n", styles: [".card{box-shadow:0 4px 8px #0003;transition:.3s;width:40%}.card:hover{box-shadow:0 8px 16px #0003}.text{padding:2px 16px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { imageUrl: [{
                type: Input
            }], title: [{
                type: Input
            }], description: [{
                type: Input
            }] } });

class UiCardModule {
}
UiCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: UiCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UiCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.3", ngImport: i0, type: UiCardModule, declarations: [CardComponent], imports: [CommonModule, i1$1.RouterModule, FormsModule], exports: [CardComponent] });
UiCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: UiCardModule, imports: [CommonModule,
        RouterModule.forRoot([]),
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: UiCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CardComponent
                    ],
                    imports: [
                        CommonModule,
                        RouterModule.forRoot([]),
                        FormsModule
                    ],
                    exports: [
                        CardComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-bp-example
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardComponent, HeaderComponent, InputComponent, NgxBpExampleComponent, NgxBpExampleModule, NgxBpExampleService, UiCardModule, UiHeaderModule, UiInputModule };
//# sourceMappingURL=ngx-bp-example.mjs.map
