import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuScrollComponent } from './menu-scroll.component';

describe('MenuScrollComponent', () => {
  let component: MenuScrollComponent;
  let fixture: ComponentFixture<MenuScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
