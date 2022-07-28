import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarBlogComponent } from './avatar-blog.component';

describe('AvatarBlogComponent', () => {
  let component: AvatarBlogComponent;
  let fixture: ComponentFixture<AvatarBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
