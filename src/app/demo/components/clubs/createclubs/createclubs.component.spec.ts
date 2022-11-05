import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateclubsComponent } from './createclubs.component';

describe('CreateclubsComponent', () => {
  let component: CreateclubsComponent;
  let fixture: ComponentFixture<CreateclubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateclubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
