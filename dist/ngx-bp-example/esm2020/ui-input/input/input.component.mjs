import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class InputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWJwLWV4YW1wbGUvc3JjL3VpLWlucHV0L2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1icC1leGFtcGxlL3NyYy91aS1pbnB1dC9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQU96RCxNQUFNLE9BQU8sY0FBYztJQU16QjtRQUxTLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUN4QixnQkFBVyxHQUFXLE9BQU8sQ0FBQztRQUN2QyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBRUssQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7MkdBaEJVLGNBQWM7K0ZBQWQsY0FBYyxvSUNQM0IsNE1BR0E7MkZESWEsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxjQUFjOzBFQUtmLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWJwLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gNTtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ0xhYmVsJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ0xhYmVsJztcclxuICB2YWx1ZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGNoZWNrVmFsaWQoKXtcclxuICAgIGlmKHRoaXMudmFsdWUubGVuZ3RoID49IHRoaXMubWluTGVuZ3RoKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIjxsYWJlbCBmb3I9XCJpbnB1dFwiPnt7bGFiZWx9fTwvbGFiZWw+XHJcbjxpbnB1dCBpZD1cImlucHV0XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0XCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgW25nQ2xhc3NdPVwiY2hlY2tWYWxpZCgpID8gJ3ZhbGlkJyA6ICdpbnZhbGlkJ1wiPlxyXG4iXX0=