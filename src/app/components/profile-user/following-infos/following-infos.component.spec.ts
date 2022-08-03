import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingInfosComponent } from './following-infos.component';

describe('FollowingInfosComponent', () => {
  let component: FollowingInfosComponent;
  let fixture: ComponentFixture<FollowingInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowingInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
