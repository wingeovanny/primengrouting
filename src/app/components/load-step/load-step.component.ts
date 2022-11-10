import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-step',
  templateUrl: './load-step.component.html',
  styleUrls: ['./load-step.component.scss']
})
export class LoadStepComponent implements OnInit {
  @Input() stepLoad: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
