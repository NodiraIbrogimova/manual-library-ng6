import { Component, OnInit } from '@angular/core';
import { Ng6LibService } from './ng6-lib.service';

@Component({
  selector: 'nlib-ng6-lib',
  templateUrl: './ng6-lib.component.html',
  styles: []
})
export class Ng6LibComponent implements OnInit {

  constructor(private ngLib:Ng6LibService) { }

  ngOnInit() {
  }

}
