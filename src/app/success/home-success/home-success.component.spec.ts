import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSuccessComponent } from './home-success.component';

describe('HomeSuccessComponent', () => {
  let component: HomeSuccessComponent;
  let fixture: ComponentFixture<HomeSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSuccessComponent]
    });
    fixture = TestBed.createComponent(HomeSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
