import { Component, OnInit } from '@angular/core';
import { ApiService } from '../pokemonService/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemonDatas: any;

  constructor(private apiService: ApiService, private router: Router) { }

  goToDetailPage(pokemonId: number): void {
    this.router.navigate(['pokemon', pokemonId]);
  }

  ngOnInit(): void {
    this.apiService.getPokemons().subscribe((data)=>{
      console.log(data);
      this.pokemonDatas = data;
    });
  }

}
