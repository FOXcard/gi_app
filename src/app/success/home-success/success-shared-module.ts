import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeSuccessComponent } from './home-success.component';
import { SuccessCardComponent } from './success-card/success-card.component';
import { SuccessCategoriesComponent } from './success-categories/success-categories.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeSuccessComponent,
        SuccessCardComponent,
        SuccessCategoriesComponent
    ],
    imports: [
        CommonModule,
        MatCheckboxModule
    ],
    exports: [
        HomeSuccessComponent
    ]
})
export class SuccessSharedModule { }