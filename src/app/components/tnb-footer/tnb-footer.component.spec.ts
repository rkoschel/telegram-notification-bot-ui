import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnbFooterComponent } from './tnb-footer.component';

describe('TnbFooterComponent', () => {
  let component: TnbFooterComponent;
  let fixture: ComponentFixture<TnbFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnbFooterComponent]
    });
    fixture = TestBed.createComponent(TnbFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
