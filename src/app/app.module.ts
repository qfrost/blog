import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule, MatInputModule } from '@angular/material';

import { AppServices } from './app.services'


const routes: Routes = [
  {
      pathMatch: 'full',
      path: '', component: HomeComponent
  },
  {
      pathMatch: 'full',
      path: 'admin', component: AdminPanelComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AdminPanelComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true, useHash: true}
  ),
  ],
  exports: [
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
