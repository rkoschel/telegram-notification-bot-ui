import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnbHeaderComponent } from './tnb-header.component';

describe('TnbHeaderComponent', () => {
  let component: TnbHeaderComponent;
  let fixture: ComponentFixture<TnbHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnbHeaderComponent]
    });
    fixture = TestBed.createComponent(TnbHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
