import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmasTreeComponent } from './xmas-tree.component';

describe('XmasTreeComponent', () => {
  let component: XmasTreeComponent;
  let fixture: ComponentFixture<XmasTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmasTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmasTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
