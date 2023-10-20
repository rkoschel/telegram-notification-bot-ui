import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnbSubscribersComponent } from './tnb-subscribers.component';

describe('TnbSubscribersComponent', () => {
  let component: TnbSubscribersComponent;
  let fixture: ComponentFixture<TnbSubscribersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnbSubscribersComponent]
    });
    fixture = TestBed.createComponent(TnbSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
