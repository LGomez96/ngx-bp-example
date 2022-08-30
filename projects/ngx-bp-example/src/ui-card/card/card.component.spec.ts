import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should to contain a title', () =>{
    component.title = "test"
    fixture.detectChanges();
    expect(element.querySelector('h4')).toBeTruthy();
    expect(element.querySelector('h4')!.textContent).toEqual("test")
  })
  it('should to contain a description', () =>{
    component.description = "test"
    fixture.detectChanges();
    expect(element.querySelector('p')).toBeTruthy();
    expect(element.querySelector('p')!.textContent).toEqual("test")
  })
  it('should to contain a image', () =>{
    component.imageUrl = "http/test.com"
    fixture.detectChanges();
    expect(element.querySelector('img')!.src).toBeTruthy();
    expect(element.querySelector('img')!.src).toContain("http/test.com")
  })
});
