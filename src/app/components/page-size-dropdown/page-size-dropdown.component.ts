import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-size-dropdown',
  templateUrl: './page-size-dropdown.component.html',
  styleUrls: ['./page-size-dropdown.component.scss'],
})
export class PageSizeDropdownComponent {
  @Output() pageSizeChange = new EventEmitter<number>();
  pageSizes: number[] = [10, 20, 50, 100];
  selectedPageSize: number = 10;

  constructor() {}

  onPageSizeChange() {
    this.pageSizeChange.emit(this.selectedPageSize);
  }
}
