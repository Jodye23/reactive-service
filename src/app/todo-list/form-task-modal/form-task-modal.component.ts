import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-form-task-modal',
  templateUrl: './form-task-modal.component.html',
  styleUrls: ['./form-task-modal.component.scss']
})
export class FormTaskModalComponent {
  todoForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: [''],
  })
  constructor(private readonly formBuilder: FormBuilder) {

  }

  addTodo() {
    const todoToAdd = new Todo();
    todoToAdd.title = this.todoForm.get('title')?.value;
    todoToAdd.description = this.todoForm.get('description')?.value;
    console.log(todoToAdd);
    

  }
}
