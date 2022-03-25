import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegistryProductComponent } from './view-registry-product.component';

describe('ViewRegistryProductComponent', () => {
  let component: ViewRegistryProductComponent;
  let fixture: ComponentFixture<ViewRegistryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRegistryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegistryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
