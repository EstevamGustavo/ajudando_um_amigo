import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../produtos';
import { CadastroService } from 'src/services/cadastro.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos = Produtos;

  constructor() { }

  ngOnInit(): void {

  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      920: {
        items: 4
      }
    },
    nav: true
  }
}
