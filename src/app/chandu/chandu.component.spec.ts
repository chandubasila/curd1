import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanduComponent } from './chandu.component';

describe('ChanduComponent', () => {
  let component: ChanduComponent;
  let fixture: ComponentFixture<ChanduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChanduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
