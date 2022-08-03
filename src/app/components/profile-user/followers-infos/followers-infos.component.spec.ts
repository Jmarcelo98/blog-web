import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersInfosComponent } from './followers-infos.component';

describe('FollowersInfosComponent', () => {
  let component: FollowersInfosComponent;
  let fixture: ComponentFixture<FollowersInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowersInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
