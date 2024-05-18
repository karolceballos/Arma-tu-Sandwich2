import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichComponentComponent } from './sandwich-component.component';

describe('SandwichComponentComponent', () => {
  let component: SandwichComponentComponent;
  let fixture: ComponentFixture<SandwichComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandwichComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandwichComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
