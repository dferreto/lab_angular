import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SeguridadModule } from './seguridad/seguridad.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeguridadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
