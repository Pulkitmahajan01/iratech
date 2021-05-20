import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockbComponent } from './blockb.component';

describe('BlockbComponent', () => {
  let component: BlockbComponent;
  let fixture: ComponentFixture<BlockbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
