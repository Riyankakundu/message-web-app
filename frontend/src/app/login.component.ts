import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component ({
    selector: 'login',
    template: `
        <mat-card class="card">
            <mat-form-field style="margin: 20px; width: 350px;">
                <input type="email" matInput placeholder="Email" [(ngModel)]="loginData.email">
            </mat-form-field>
            <mat-form-field style="margin: 20px; width: 350px;">
                <input type="password" matInput placeholder="Password" [(ngModel)]="loginData.password">
            </mat-form-field>
            <button style="margin: 20px;" mat-raised-button color="primary" (click)="login()">Login</button>
        </mat-card>
    `
})
export class LoginComponent {
    constructor(public auth: AuthService) {}

    loginData = {
        email: '',
        password: ''
    }

    login() {
        this.auth.login(this.loginData);
    }
}