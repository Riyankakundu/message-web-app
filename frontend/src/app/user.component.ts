import { Component } from '@angular/core';
import { WebService } from './web.service';
@Component ({
    selector: 'user',
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-form-field class="example-full-width">
                    <input [(ngModel)]="model.firstName" matInput placeholder="First Name">
                </mat-form-field>
                <mat-form-field class="example-full-width">
                    <input [(ngModel)]="model.lastName" matInput placeholder="Last Name">
                </mat-form-field>
                <mat-card-actions>
                    <button mat-raised-button color="primary" (click)="save()">Save Changes</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>
    `
})
export class UserComponent {
    constructor(private webService: WebService) {}
    
    model = {
        firstName: "",
        lastName: ""
    }

    ngOnInit() {
        this.webService.getUser().subscribe((res: any) => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        });
    }

    save() {
        this.webService.saveUser(this.model).subscribe();
    }
}