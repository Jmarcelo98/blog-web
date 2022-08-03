import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInfosComponent } from './post-infos.component';

describe('PostInfosComponent', () => {
  let component: PostInfosComponent;
  let fixture: ComponentFixture<PostInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
