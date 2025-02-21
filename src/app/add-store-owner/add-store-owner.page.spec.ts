import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddStoreOwnerPage } from './add-store-owner.page';

describe('AddStoreOwnerPage', () => {
  let component: AddStoreOwnerPage;
  let fixture: ComponentFixture<AddStoreOwnerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStoreOwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
