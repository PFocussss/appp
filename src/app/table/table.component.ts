import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  index_save? : number; 
  product = {
      product_name: "",
      product_engine: "",
      product_price: "",
      product_type: ""
  }
  
  product_list = [
    {
      product_name: "Ford Focus",
      product_engine: "1600 cc",
      product_price: "879,000 ฿",
      product_type: "Subcompact"
    },
    {
      product_name: "Ford Focus",
      product_engine: "2000 cc",
      product_price: "1,069,000 ฿",
      product_type: "Subcompact"
    },
    {
      product_name: "Ford Ecosport",
      product_engine: "1500 cc",
      product_price: "869,000 ฿",
      product_type: "B-SUV"
    },
    {
      product_name: "Ford Ranger",
      product_engine: "2000 cc",
      product_price: "1,369,000 ฿",
      product_type: "Truck"
    },
    {
      product_name: "Ford Everest",
      product_engine: "2000 cc",
      product_price: "1,879,000 ฿",
      product_type: "PPV"
    }
  ]

  ngOnInit(): void {
    
  }
  
  getdata(prod_name:string, prod_price:number){
    console.log(prod_name);
    console.log(prod_price);
    
  }
  getDataAll(data:any,index:number){
    this.index_save = index++;
    this.product.product_name = data.product_name
    this.product.product_engine = data.product_engine
    this.product.product_price = data.product_price
    this.product.product_type = data.product_type
    console.log(data);

  }

  editdata() {
    this.product_list[this.index_save!] = this.product
  }

  adddata() {
    this.product_list.push(this.product)
  }
  delete(index:number){
    this.product_list.splice(index,1)
  }
}
