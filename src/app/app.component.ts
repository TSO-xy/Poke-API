import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PokeModel } from '../pokemodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Poké API';
    
    constructor(private httpClient: HttpClient) { };
    
    pokemon: PokeModel[];
    
    ngOnInit() { }
}