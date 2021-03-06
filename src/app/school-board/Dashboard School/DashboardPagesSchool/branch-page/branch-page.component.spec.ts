import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchPageComponent } from './branch-page.component';

describe('BranchPageComponent', () => {
  let component: BranchPageComponent;
  let fixture: ComponentFixture<BranchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
