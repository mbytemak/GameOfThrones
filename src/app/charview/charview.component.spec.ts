import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharviewComponent } from './charview.component';

describe('CharviewComponent', () => {
  let component: CharviewComponent;
  let fixture: ComponentFixture<CharviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
