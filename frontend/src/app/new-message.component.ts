import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService } from './auth.service';

@Component ({
    selector: 'new-message',
    template: `
        <mat-card class="card">
            <mat-card-content>
                <!--- <mat-form-field class="example-full-width">
                    <input [(ngModel)]="message.owner" matInput placeholder="Name">
                </mat-form-field> --->
                <mat-form-field class="example-full-width">
                    <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
                </mat-form-field>
                <mat-card-actions>
                    <button mat-button color="primary" (click)="post()">POST</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>
    `
})
export class NewMessageComponent {
    constructor(private webService: WebService, public auth: AuthService) {}
    
    message = {
        owner: this.auth.name,
        text: ""
    }
    post() {
        this.webService.postMessage(this.message);
    }
}