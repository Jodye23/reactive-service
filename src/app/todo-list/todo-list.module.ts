import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { FormTaskModalComponent } from './form-task-modal/form-task-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormTaskModalComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodoListModule { }
