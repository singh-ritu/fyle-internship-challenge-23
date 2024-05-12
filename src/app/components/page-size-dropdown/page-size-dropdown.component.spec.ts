import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PageSizeDropdownComponent } from './page-size-dropdown.component';

describe('PageSizeDropdownComponent', () => {
  let component: PageSizeDropdownComponent;
  let fixture: ComponentFixture<PageSizeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageSizeDropdownComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSizeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selected page size on change', () => {
    const pageSize = 20;
    spyOn(component.pageSizeChange, 'emit');
    component.selectedPageSize = pageSize;
    component.onPageSizeChange();
    expect(component.pageSizeChange.emit).toHaveBeenCalledWith(pageSize);
  });
});
