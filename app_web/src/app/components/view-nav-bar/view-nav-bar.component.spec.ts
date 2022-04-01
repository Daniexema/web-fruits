import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNavBarComponent } from './view-nav-bar.component';

describe('ViewNavBarComponent', () => {
  let component: ViewNavBarComponent;
  let fixture: ComponentFixture<ViewNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
