import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Owner, Repository } from '../types';
import { ApiCacheService } from './api-cache.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.github.com';

  constructor(
    private httpClient: HttpClient,
    private cacheService: ApiCacheService
  ) {}

  getUser(githubUsername: string): Observable<Owner> {
    const cachedKey = `owner_${githubUsername}`;
    const cachedData = this.cacheService.get(cachedKey) as Owner;
    if (cachedData) {
      return of(cachedData);
    } else {
      return this.httpClient
        .get<Owner>(`${this.apiUrl}/users/${githubUsername}`)
        .pipe(tap((data) => this.cacheService.set(cachedKey, data)));
    }
  }

  getRepositories(
    githubUsername: string,
    currentPage: number,
    pageSize: number
  ): Observable<Repository[]> {
    const cacheKey = `repositories_${githubUsername}_${currentPage}_${pageSize}`;
    const cachedData = this.cacheService.get(cacheKey) as Repository[];
    console.log(cacheKey, cachedData);
    if (cachedData && cachedData.length > 0) {
      return of(cachedData);
    } else {
      return this.httpClient
        .get<Repository[]>(
          `${this.apiUrl}/users/${githubUsername}/repos?per_page=${pageSize}&page=${currentPage}`
        )
        .pipe(tap((data) => this.cacheService.set(cacheKey, data)));
    }
  }
}
