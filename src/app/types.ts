export interface Owner {
  avatar_url: string;
  login: string;
  bio: string;
  name: string;
  twitter_username: string;
  html_url: string;
  public_repos: number;
  message?: string;
}
export interface Repository {
  name: string;
  description: string;
  topics: string[];
  html_url: string;
  owner: Owner;
  message?: string;
}
