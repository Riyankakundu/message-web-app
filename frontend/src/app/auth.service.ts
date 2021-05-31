import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()

export class AuthService {
    BASE_URL = 'http://localhost:63145/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';

    constructor(private http: HttpClient, private router: Router) {}

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    get tokenHeader() {
        var header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem(this.TOKEN_KEY));
        const requestOptions = { 'headers': header }; 
        return requestOptions;
    }

    login(loginData: any) {
        this.http.post(this.BASE_URL + '/login', loginData).subscribe((res: any) => {
            this.authenticate(res);
        });
    }

    register(user: any) {
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe((res: any) => {
            this.authenticate(res);
        });
    }
    logout() {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    }
    authenticate(res: any) {
        var authResponse = res;
        if(!authResponse.token) {
            return;
        }
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstName);
        this.router.navigate(['/']);
    }
 }