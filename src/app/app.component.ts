import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductInterface } from './interfaces/product.interface';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ApiAngularAndres';
  dato? : ProductInterface;

  Array : number[]= [];
  constructor (private productservice:ProductService){
    
  }
  public obtenerDatos (){
    this.productservice.getPorduct ().subscribe((data:ProductInterface[])=>{console.log(data)})
  }
  ngOnInit(): void {
    this.obtenerDatos();
  }
}
