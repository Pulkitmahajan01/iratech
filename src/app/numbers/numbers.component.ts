import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  public index: number;
  public val: number;
  constructor() {}

  ngOnInit(): void {}

  OnPrintNum() {
    let num = +this.index + 1;
    num = num * num;
    if (this.index % 2 !== 0) {
      this.val = num - 1;
    } else {
      this.val = num + 1;
    }
  }

  setIndex(event) {
    this.index = event.target.value;
  }
}
