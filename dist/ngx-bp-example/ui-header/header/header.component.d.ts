import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit {
    links: Links[];
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "ngx-bp-header", never, { "links": "links"; }, {}, never, ["[logo]"], false>;
}
export interface Links {
    name: string;
    router: string[] | undefined;
}
