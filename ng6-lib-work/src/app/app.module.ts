import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Ng6LibModule } from "ng6-lib";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ng6LibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
