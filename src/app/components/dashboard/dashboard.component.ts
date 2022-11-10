import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() dato: string = '';

  @Input()
  empl!: Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
