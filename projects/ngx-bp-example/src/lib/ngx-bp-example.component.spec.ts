import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBpExampleComponent } from './ngx-bp-example.component';

describe('NgxBpExampleComponent', () => {
  let component: NgxBpExampleComponent;
  let fixture: ComponentFixture<NgxBpExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBpExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxBpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
