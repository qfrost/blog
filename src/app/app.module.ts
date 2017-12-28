import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddPostDialog } from './admin-panel/admin-panel.component';
import { LoginFormComponent } from './login-form/login-form.component'
import { SignupFormComponent } from './signup-form/signup-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule, MatInputModule } from '@angular/material';

import { AppServices } from './shared/app.services';
import { AppData } from './shared/app.data';


const routes: Routes = [
  {
      pathMatch: 'full',
      path: '', component: HomeComponent
  },
  {
      pathMatch: 'full',
      path: 'log-in', component: LoginFormComponent
  },
  {
      pathMatch: 'full',
      path: 'sign-up', component: SignupFormComponent
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
    AdminPanelComponent,
    LoginFormComponent,
    SignupFormComponent,
    AddPostDialog
  ],
  imports: [
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
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
  entryComponents: [AddPostDialog],
  exports: [
    MatIconModule
  ],
  providers: [AppServices, AppData],
  bootstrap: [AppComponent]
})
export class AppModule { }
