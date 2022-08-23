import { Component } from '@angular/core';
import { Links } from 'projects/ngx-bp-example/src/ui-header/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linksApp1: Links[] = [
    {
      name: 'Cursos',
      router:['/','cursos']
    },
    {
      name: 'Mi Portal',
      router:['/','cursos']
    },
    {
      name: 'Banca Web',
      router:['/','cursos']
    }
  ]
  title = 'library-bp';
}
