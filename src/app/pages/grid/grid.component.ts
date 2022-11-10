import { Component, OnInit } from '@angular/core';
import { People } from './People';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {

  }

  people: People[] = [
    {
      id: 0, name: 'Edwin'
    },
    {
      id: 1, name: 'Geo'
    }
  ];

  products = [
    {
      id: "iphone",
      name: "iPhone",
      price: "599",
    },
    {
      id: "samsung",
      name: "Samsung",
      price: "699",
    },
    {
      name: "Pixel",
      price: "599",
    },
  ]


}
