import { Component, Input } from '@angular/core';
import { EMPTY_OWNER } from 'src/app/constants';
import { Owner } from 'src/app/types';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() owner: Owner = EMPTY_OWNER;
}
