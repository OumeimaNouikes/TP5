import { Injectable } from '@angular/core';
import { Action } from 'src/models/Action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  actions: Action[] = [];

  addAction(action: Action): void {
    this.actions.push(action);
  }
  getAllActions():Action[]{
    return this.actions
}
removeAction(action:Action): void {
  const index = this.actions.indexOf(action);
  if (index !== -1) {
    this.actions.splice(index, 1);
  }
}
}
