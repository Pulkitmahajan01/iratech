import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockcComponent } from './blockc.component';

describe('BlockcComponent', () => {
  let component: BlockcComponent;
  let fixture: ComponentFixture<BlockcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
