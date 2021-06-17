import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  numberOfClicks = 0;

  constructor() { }

  ngOnInit(): void {
    ;
  }

  increment(increment: number): void {
    this.numberOfClicks += increment;
  }

}
