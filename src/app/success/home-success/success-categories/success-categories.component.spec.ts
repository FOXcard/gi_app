import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCategoriesComponent } from './success-categories.component';

describe('SuccessCategoriesComponent', () => {
  let component: SuccessCategoriesComponent;
  let fixture: ComponentFixture<SuccessCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessCategoriesComponent]
    });
    fixture = TestBed.createComponent(SuccessCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
