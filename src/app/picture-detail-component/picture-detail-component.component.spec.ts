import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureDetailComponentComponent } from './picture-detail-component.component';

describe('PictureDetailComponentComponent', () => {
  let component: PictureDetailComponentComponent;
  let fixture: ComponentFixture<PictureDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureDetailComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PictureDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
