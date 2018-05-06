import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';

import { AppComponent } from './app.component';
import { routing } from './app-routing';

import { AlertComponent } from './directives/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { BannerComponent } from './banner/banner.component';
import { ProjectComponent } from './project/project.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        MatToolbarModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatButtonModule,
        BrowserAnimationsModule,
        ButtonModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        AlertComponent,
        HomeComponent,
        RegisterComponent,
        MenuComponent,
        BannerComponent,
        ProjectComponent,
        CustomerComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }