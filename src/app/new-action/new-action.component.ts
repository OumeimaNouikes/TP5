import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Action } from 'src/models/Action';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-new-action',
  templateUrl: './new-action.component.html',
  styleUrls: ['./new-action.component.scss']
})
export class NewActionComponent {
  @Input() action!: Action;
  actionForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private actionService: ActionService) {}

  ngOnInit(): void {
    this.actionForm = this.formBuilder.group({
      nom: [null],
      objectif: [null],
      responsable: [null],
      nombreDePersonnes: [null],
      inscriDate: [null]
    });
  }

  onSubmitForm(): void {
    const newAction = this.actionForm.value;
    console.log(this.actionForm.value);
    this.actionService.addAction(newAction);
  }
}
