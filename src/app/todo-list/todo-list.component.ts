import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormTaskModalComponent } from './form-task-modal/form-task-modal.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoList$: Observable<Todo[]> = new Observable<Todo[]>();
  currentTodo: Todo = new Todo();

  // readonly -> servizio utilizzabile in solo lettura non modificabile
  constructor(private readonly todoService: TodoService, private readonly modalService: NgbModal) {
    this.todoList$ = this.todoService.getTodoList();
    this.todoList$.subscribe(console.log)
  }


  openFormTaskModal() {
    this.modalService.open(FormTaskModalComponent,{
      size: 'xl'
    });
  }


}
