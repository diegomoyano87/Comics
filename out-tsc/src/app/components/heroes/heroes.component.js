import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeroesComponent = class HeroesComponent {
    constructor(_heroesService, router) {
        this._heroesService = _heroesService;
        this.router = router;
        this.heroes = [];
        // console.log ("constructor");
    }
    ngOnInit() {
        this.heroes = this._heroesService.getHeroes();
        //console.log(this.heroes);
    }
    verHeroe(idx) {
        this.router.navigate(['/heroe', idx]);
    }
};
HeroesComponent = __decorate([
    Component({
        selector: 'app-heroes',
        templateUrl: './heroes.component.html'
    })
], HeroesComponent);
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map