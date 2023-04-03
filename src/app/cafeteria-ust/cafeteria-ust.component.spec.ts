import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaUstComponent } from './cafeteria-ust.component';

describe('CafeteriaUstComponent', () => {
  let component: CafeteriaUstComponent;
  let fixture: ComponentFixture<CafeteriaUstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeteriaUstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeteriaUstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
