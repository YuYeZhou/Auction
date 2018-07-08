import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Observable<Product[]>;

  // private keyword: string;

  // private titleFilter: FormControl = new FormControl()

  private imgUrl = "http://placehold.it/320x150"

  constructor(private productService: ProductService) { 
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    )
  }

}

