import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTuandangComponent } from './lib-tuandang.component';

describe('LibTuandangComponent', () => {
  let component: LibTuandangComponent;
  let fixture: ComponentFixture<LibTuandangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibTuandangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibTuandangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
