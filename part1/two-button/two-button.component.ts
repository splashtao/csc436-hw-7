import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two-button',
  templateUrl: './two-button.component.html',
  styleUrls: ['./two-button.component.css']
})
export class TwoButtonComponent implements OnInit {
  @Input() leftButton: string;
  @Input() rightButton: string;
  constructor() {}

  ngOnInit() {
  }

}
