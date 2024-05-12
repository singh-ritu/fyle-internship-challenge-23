import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Owner, Repository } from './types';
import { EMPTY_OWNER } from './constants';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  repositories: Repository[] = [];
  owner: Owner = EMPTY_OWNER;
  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = 10; // Default page size
  username: string = '';
  errorMessage: string = '';

  constructor(private apiService: ApiService) {}

  fetchUserDetails(username: string) {
    this.apiService
      .getUser(username)
      .pipe(
        catchError((error) => {
          console.log(error);
          this.errorMessage = 'User not found';
          return EMPTY;
        })
      )
      .subscribe((data) => {
        console.log(this.errorMessage);
        if (!this.errorMessage) {
          this.owner = data;
          this.totalPages = Math.ceil(data.public_repos / this.pageSize);
          this.fetchRepositories();
        }
      });
  }

  fetchRepositories() {
    this.apiService
      .getRepositories(this.username, this.currentPage, this.pageSize)
      .pipe(
        catchError((error) => {
          console.log(error);
          this.errorMessage = 'No public repository found';
          return EMPTY;
        })
      )
      .subscribe((data) => {
        if (!this.errorMessage) {
          if (data.length === 0) {
            this.errorMessage = 'No public repository found';
            return;
          }
          this.repositories = data;
        }
      });
  }

  onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.currentPage = 1;
    if (this.username) {
      this.fetchUserDetails(this.username);
    }
  }

  onSearch(username: string) {
    this.errorMessage = '';
    this.username = username;
    this.currentPage = 1;
    this.fetchUserDetails(username);
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchRepositories();
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchRepositories();
    }
  }
}
