import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingStatistiqueComponent } from './rating-statistique.component';

describe('RatingStatistiqueComponent', () => {
  let component: RatingStatistiqueComponent;
  let fixture: ComponentFixture<RatingStatistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingStatistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
