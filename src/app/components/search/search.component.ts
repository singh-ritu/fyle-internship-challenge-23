import { Component, Output, EventEmitter } from '@angular/core'; // Remove NgModule import

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  username: string = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.username);
  }
}
