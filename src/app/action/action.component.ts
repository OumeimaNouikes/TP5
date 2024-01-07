import { Component, Input } from '@angular/core';
import { Action } from 'src/models/Action';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {
  @Input() action!: Action;
  constructor(private actionService: ActionService) {}

  deleteAction(): void {
    this.actionService.removeAction(this.action)
    
  }
  marqueReussie = false;

    marquerReussie() {
        this.marqueReussie = !this.marqueReussie;
    }

}
