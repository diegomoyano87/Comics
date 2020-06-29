import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { runInThisContext } from 'vm';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'

})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []
  termino: string;
  verheroes: string;
  constructor( private activatedRoute: ActivatedRoute, 
               private _HeroesService: HeroesService) 
               {

               }
  ngOnInit() {
      this.activatedRoute.params.subscribe (params => {
        this.termino=params ['termino'];
        this.heroes = this._HeroesService.buscarHeroes (params ['termino']);
        console.log (this.heroes);
      });
  }


}
