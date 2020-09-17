import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeroeComponent = class HeroeComponent {
    constructor(activateRoute, _heroesService) {
        this.activateRoute = activateRoute;
        this._heroesService = _heroesService;
        this.heroe = {};
        this.activateRoute.params.subscribe(params => {
            this.heroe = this._heroesService.getHeroe(params['id']);
            console.log(this.heroe);
        });
    }
};
HeroeComponent = __decorate([
    Component({
        selector: 'app-heroe',
        templateUrl: './heroe.component.html',
    })
], HeroeComponent);
export { HeroeComponent };
//# sourceMappingURL=heroe.component.js.map