import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBackgroundComponent } from './img-background.component';

describe('ImgBackgroundComponent', () => {
  let component: ImgBackgroundComponent;
  let fixture: ComponentFixture<ImgBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
