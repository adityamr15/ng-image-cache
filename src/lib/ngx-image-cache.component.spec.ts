import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageCacheComponent } from './ngx-image-cache.component';

describe('NgxImageCacheComponent', () => {
  let component: NgxImageCacheComponent;
  let fixture: ComponentFixture<NgxImageCacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxImageCacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
