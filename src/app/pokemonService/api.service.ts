import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getPokemons(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/pokemons`);
  }

  public getPokemonById(id: number){
    return this.httpClient.get(`http://127.0.0.1:8000/api/pokemons/${id}`);
  }
}

