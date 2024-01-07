import { Component } from '@angular/core';
import { Action } from 'src/models/Action';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent {
  actions: Action[] = [];

  constructor(private actionService: ActionService) {}

  ngOnInit(): void {
    
    this.actions = this.actionService.getAllActions();
  }
}
