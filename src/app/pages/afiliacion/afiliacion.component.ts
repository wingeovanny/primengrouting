import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/product.model';

@Component({
  selector: 'app-afiliacion',
  templateUrl: './afiliacion.component.html',
  styleUrls: ['./afiliacion.component.scss']
})
export class AfiliacionComponent implements OnInit {

  constructor() { }
  products: Producto[] = [];
  ngOnInit(): void {
    this.products = [{
      code: 90,
      name: "iPhone",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },

    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },

    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    }, {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },

    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    {
      code: 980,
      name: "Samsung",

    },
    {
      code: 9660,
      name: "Pixel",

    },
    ];


  }
  clickMessage = "";

  handleClick(event: Event) {
    console.log("handleClick");
    this.clickMessage = "Has hecho clic en botón";
  }




}
