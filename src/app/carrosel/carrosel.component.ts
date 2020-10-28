import { Component, OnInit } from '@angular/core';
import { Dogs, DogService } from '../dog.service';


@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarroselComponent implements OnInit {
  itens = {
    first: 0,
    last: 3,
  };
  dogs: Dogs[] = [];


  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getDogs('initial', 0, 3);
  }

  nextDog(){
    this.itens.first = this.itens.first + 1;
    this.itens.last = this.itens.last + 1;
    this.getDogs('next', this.itens.first, this.itens.last);
  }

  
  previousDog(){
    this.itens.first = this.itens.first - 1 >= 0 ? this.itens.first - 1 : 0;
    this.itens.last = this.itens.last - 1 >= 3 ? this.itens.last - 1 : 3;
    this.getDogs('previous', this.itens.first, this.itens.last);
  }

  getDogs(type, firstItem, lastItem){
    this.dogService.listDogs().subscribe(dog => {
      const itemDogs = dog.slice(firstItem, lastItem);

      if(type === 'initial'){
        this.dogs = itemDogs;

      } 
      else if(type === 'next'){
        this.dogs = itemDogs.length >= 3 ? itemDogs : dog.slice(dog.length - 3, dog.length);
        
      } else {
        this.dogs = itemDogs.length >= 3 ? itemDogs : dog.slice(this.itens.first - 1, this.itens.last - 1);
      }
    })  
  }

}

