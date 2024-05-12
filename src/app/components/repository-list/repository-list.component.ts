import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/types';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent {
  @Input() repositories: Repository[] = []; // Receive repositories from the parent component

  goToRepo(repourl: string) {
    window.open(repourl);
  }
}
