import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  counter = 0;

  ngOnInit(): void {
  }

  countChangedHandler() {
    this.counter++;
  }
}
