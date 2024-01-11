import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-form-task-modal',
  templateUrl: './form-task-modal.component.html',
  styleUrls: ['./form-task-modal.component.scss']
})
export class FormTaskModalComponent {
  todoForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: [''],
  });
  constructor(private readonly formBuilder: FormBuilder, private readonly todoService: TodoService, private readonly ngbActiveModal: NgbActiveModal) {

  }

  addTodo() {
    const todoToAdd = new Todo();
    todoToAdd.title = this.todoForm.get('title')?.value;
    todoToAdd.description = this.todoForm.get('description')?.value;
    console.log(todoToAdd);
    this.todoService.addTodo(todoToAdd);
    this.todoForm.reset();
  }

  closeTodoModal() {
    this.ngbActiveModal.close();

  }
}
