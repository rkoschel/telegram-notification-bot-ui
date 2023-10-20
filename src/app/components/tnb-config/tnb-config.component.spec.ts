import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnbConfigComponent } from './tnb-config.component';

describe('TnbConfigComponent', () => {
  let component: TnbConfigComponent;
  let fixture: ComponentFixture<TnbConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnbConfigComponent]
    });
    fixture = TestBed.createComponent(TnbConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
