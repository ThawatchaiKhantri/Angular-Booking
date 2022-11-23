import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormImageComponent } from './post-form-image.component';

describe('PostFoemImageComponent', () => {
  let component: PostFormImageComponent;
  let fixture: ComponentFixture<PostFormImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFormImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFormImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
