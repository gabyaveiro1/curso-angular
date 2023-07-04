import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "../dbz/pages/main-page.component";

@NgModule({

  declarations:[
    HeroeComponent,
    ListadoComponent,

  ],
  exports:[
    ListadoComponent
  ],
  imports:[
    CommonModule
  ]
})

export class HeroesModule{

}
