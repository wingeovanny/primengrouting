

export class Producto {
    code: number = 0;
    name: string = '';
    category?: string = '';
    quantity?: number = 0;
    price?: number = 0;
    /*
        constructor(code: number, name: string, category?: string, quantity?: number, price?: number) {
            this.code = code;
            this.name = name;
            this.category = category;
            this.quantity = quantity;
            this.price = price;
        }
        */
    constructor() { }
}

export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}

