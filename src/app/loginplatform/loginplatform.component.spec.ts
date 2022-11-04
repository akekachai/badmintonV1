import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginplatformComponent } from './loginplatform.component';

describe('LoginplatformComponent', () => {
  let component: LoginplatformComponent;
  let fixture: ComponentFixture<LoginplatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginplatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
