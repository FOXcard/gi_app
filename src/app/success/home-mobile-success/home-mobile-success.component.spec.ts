import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMobileSuccessComponent } from './home-mobile-success.component';

describe('HomeMobileSuccessComponent', () => {
  let component: HomeMobileSuccessComponent;
  let fixture: ComponentFixture<HomeMobileSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMobileSuccessComponent]
    });
    fixture = TestBed.createComponent(HomeMobileSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
