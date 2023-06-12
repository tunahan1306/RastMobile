//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DxDataGridModule } from 'devextreme-angular';
import { DxResponsiveBoxModule } from 'devextreme-angular/ui/responsive-box';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DxDataGridModule,
    DxResponsiveBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
