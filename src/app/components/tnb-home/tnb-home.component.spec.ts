import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnbHomeComponent } from './tnb-home.component';

describe('TnbHomeComponent', () => {
  let component: TnbHomeComponent;
  let fixture: ComponentFixture<TnbHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnbHomeComponent]
    });
    fixture = TestBed.createComponent(TnbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
