import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should to contain a image', () => {
    component.links = [{
      name: 'test',
      router: ['/', 'test']
    }]
    fixture.detectChanges();
    expect(element.querySelectorAll('li').length).toEqual(component.links.length);
    expect(element.querySelector('li')!.textContent).toContain('test')
  })
});
