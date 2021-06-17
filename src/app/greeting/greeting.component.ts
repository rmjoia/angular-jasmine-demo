import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  @Input() people: { name: string, numberOfMessages: number }[] | null = null;
  @Output() greet = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    ;
  }

  doSomething(personIndex: number) {
    if (typeof this.people === 'object' && this.people !== null) {
      this.people[personIndex].numberOfMessages++;
      this.greet.emit(this.people[personIndex].name);
    }
  }

}
