import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
;
import { SidebarComponent } from './template/sidebar/sidebar.component'
;
import { NavbarComponent } from './template/navbar/navbar.component';
import { MainComponent } from './main/main.component';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SidebarComponent ,
        NavbarComponent,
        MainComponent,
        NavbarComponent,
        SidebarComponent
        // SingleSelectComponent
     ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //  fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }