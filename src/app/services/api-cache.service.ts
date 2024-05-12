import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCacheService {
  private cache = new Map<string, any>();

  constructor() {}

  get(key: string): any {
    return this.cache.get(key);
  }

  set(key: string, value: any): void {
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
  }

  clearKey(key: string): void {
    this.cache.delete(key);
  }
}
