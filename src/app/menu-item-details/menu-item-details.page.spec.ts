import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemDetailsPage } from './menu-item-details.page';

describe('MenuItemDetailsPage', () => {
  let component: MenuItemDetailsPage;
  let fixture: ComponentFixture<MenuItemDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
