import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Application components and services
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Tenemos que importar siempre CoreModule para tener los componentes de Material y Covalent
import { CoreModule } from './shared/core.module';
import { FormLoginModule } from './form-login/form-login-module';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './layout/header/header.component';
import { ViewQueueComponent } from './view-queue/view-queue.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    ViewQueueComponent,
  ],
  imports: [
    BrowserModule,
    FormLoginModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
