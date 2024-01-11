import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { STATUS_TODO, Todo } from '../models/todo.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormTaskModalComponent } from './form-task-modal/form-task-modal.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  typeTodoStatus:STATUS_TODO[] = [
    STATUS_TODO.DONE,
    STATUS_TODO.RESCHEDULE,
    STATUS_TODO.TO_BE_DONE,
  ]
  todoList$: Observable<any> = new Observable<any>();
  // todoListDone$: Observable<Todo[]> = new Observable<Todo[]>();
  // todoListToBeDone$: Observable<Todo[]> = new Observable<Todo[]>();

  // readonly -> servizio utilizzabile in solo lettura non modificabile
  constructor(private readonly todoService: TodoService, private readonly modalService: NgbModal) {
    // this.todoListDone$ = this.todoService.getTodoList().pipe(
    //   map((todos) => 
    //     todos.filter((t) => t.status === STATUS_TODO.DONE)
    //   )
    // );
    // this.todoListToBeDone$ = this.todoService.getTodoList().pipe(
    //   map((todos) => 
    //     todos.filter((t) => t.status !== STATUS_TODO.DONE)
    //   )
    // );

    this.todoList$ = this.todoService.getTodoList();
    
  }


  openFormTaskModal() {
    this.modalService.open(FormTaskModalComponent,{
      size: 'xl'
    });
  }

  changeStatus(type: STATUS_TODO, id: number) {
    this.todoService.changeStatus(type, id)
  }


}
