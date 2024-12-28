import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageandtextComponent } from './imageandtext.component';

describe('ImageandtextComponent', () => {
  let component: ImageandtextComponent;
  let fixture: ComponentFixture<ImageandtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageandtextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageandtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
