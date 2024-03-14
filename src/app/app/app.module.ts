import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from "../app.routes";



@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}  // <-- debugging purposes only
    )
  ]
})
export class AppModule { }
