import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  people = [
    { name: 'Zeca Banguma', numberOfMessages: 55 },
    { name: 'Zezinho', numberOfMessages: 0 },
    { name: 'Luizinho', numberOfMessages: 20 }
  ];

  constructor() {

  }

  onGreet(name: string) {
    window.alert(`hellooooo ${name}!`);
  }
}
