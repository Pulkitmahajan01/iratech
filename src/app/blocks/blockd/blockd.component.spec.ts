import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockdComponent } from './blockd.component';

describe('BlockdComponent', () => {
  let component: BlockdComponent;
  let fixture: ComponentFixture<BlockdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
