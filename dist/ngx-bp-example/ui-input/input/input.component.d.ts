import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class InputComponent implements OnInit {
    minLength: number;
    label: string;
    placeholder: string;
    value: string;
    constructor();
    ngOnInit(): void;
    checkValid(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "ngx-bp-input", never, { "minLength": "minLength"; "label": "label"; "placeholder": "placeholder"; }, {}, never, never, false>;
}
