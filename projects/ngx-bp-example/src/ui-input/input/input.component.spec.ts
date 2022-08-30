import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should to contain a label', () => {
    component.label = "test"
    fixture.detectChanges();
    expect(element.querySelector('label')).toBeTruthy();
    expect(element.querySelector('label')!.textContent).toEqual("test")
  })

  it('should to contain a placeholder', () => {
    component.placeholder = "test"
    fixture.detectChanges();
    expect(element.querySelector('input')!.placeholder).toBeTruthy();
    expect(element.querySelector('input')!.placeholder).toEqual("test")
  })
  it('should check valid base on length', () => {

    component.minLength = 5;
    component.value = 'test';
    let result =  component.checkValid();

    expect(result).toBeFalse();
    component.value = 'asdfghj';
    result = component.checkValid();
    expect(result).toBeTrue();
  })
});
