import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeSuccessComponent } from './home-success.component';
import { SuccessCardComponent } from './success-card/success-card.component';
import { SuccessCategoriesComponent } from './success-categories/success-categories.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeSuccessComponent,
        SuccessCardComponent,
        SuccessCategoriesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HomeSuccessComponent
    ]
})
export class SuccessSharedModule { }