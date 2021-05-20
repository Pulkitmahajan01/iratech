import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockaComponent } from './blocka.component';

describe('BlockaComponent', () => {
  let component: BlockaComponent;
  let fixture: ComponentFixture<BlockaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
