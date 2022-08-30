import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CardComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYnAtZXhhbXBsZS9zcmMvdWktY2FyZC9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWJwLWV4YW1wbGUvc3JjL3VpLWNhcmQvY2FyZC9jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQUt4QjtRQUpTLGFBQVEsR0FBRyxvRUFBb0UsQ0FBQztRQUNoRixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsYUFBYSxDQUFDO0lBRXJCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzBHQVJVLGFBQWE7OEZBQWIsYUFBYSxpSUNQMUIsMk1BT0E7MkZEQWEsYUFBYTtrQkFMekIsU0FBUzsrQkFDRSxhQUFhOzBFQUtkLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWJwLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaW1hZ2VVcmwgPSAnaHR0cHM6Ly9jb25jZXB0by5kZS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMy9wYWlzYWplLTgwMHg0MDkuanBnJztcclxuICBASW5wdXQoKSB0aXRsZSA9ICdUaXRsZSc7XHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb24gPSAnRGVzY3JpcHRpb24nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgPGltZyBbc3JjXT1cImltYWdlVXJsXCIgYWx0PVwiQXZhdGFyXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+XHJcbiAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgIDxoND48Yj57e3RpdGxlfX08L2I+PC9oND5cclxuICAgIDxwPnt7ZGVzY3JpcHRpb259fTwvcD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==