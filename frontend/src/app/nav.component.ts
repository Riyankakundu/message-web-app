import { Component } from '@angular/core';
@Component ({
    selector: 'nav',
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/">Message Board</button>
            <button mat-button routerLink="/messages">Messages</button>
        </mat-toolbar>
    `
})
export class NavComponent {
    constructor() {}
}