import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { STATUS_TODO, Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: Todo[] = [
    new Todo({
      id: 999,
      title: 'Test',
      description: "description test",
      status: STATUS_TODO.TO_BE_DONE
    })
  ];
  private todoList$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(this.todoList);

  constructor() { }

  getTodoList():Observable<Todo[]> {
    return this.todoList$.asObservable();
  }

  addTodo(todo: Todo) {
    this.todoList.push(todo);
    this.todoList$.next(this.todoList);
  }






}
