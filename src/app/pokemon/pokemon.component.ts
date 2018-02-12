import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PokeModel } from '../../pokemodel';
import { ResponseModel } from '../../responsemodel';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
    
    @Input() pokemon: ResponseModel;

  constructor(private httpClient: HttpClient) {
    this.pokemon = 
    { 
        results: [], 
        count: 0, 
        next: "", 
        previous: "" 
    };
  }

  ngOnInit() {
      this.httpClient.get<ResponseModel>('https://www.pokeapi.co/api/v2/pokemon/?limit=10').subscribe(data => {
          this.pokemon = data;
          
          console.log(data);
          //console.log(this.pokemon.results);
          //console.log(this.pokemon.next);
          
      })
  }

    
  nextPage() {
      this.httpClient.get<ResponseModel>(this.pokemon.next).subscribe(data => {
          this.pokemon = data;
          console.log(data.next);
      })
  }
    
    previousPage() {
        this.httpClient.get<ResponseModel>(this.pokemon.previous).subscribe(data => {
            this.pokemon = data;
            console.log(data.next);
        })
    }
}