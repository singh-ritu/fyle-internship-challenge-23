import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { PageSizeDropdownComponent } from './components/page-size-dropdown/page-size-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepositoryListComponent,
    UserCardComponent,
    PaginationComponent,
    EmptyStateComponent,
    PageSizeDropdownComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
