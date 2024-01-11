import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
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

  getTodoList(): Observable<any> {
    return this.todoList$.asObservable().pipe(map(todos=> {
      return {
        todo: todos.filter((t) => t.status === STATUS_TODO.DONE),
        notTodo: todos.filter((t) => t.status !== STATUS_TODO.DONE),
      }
    }) );
  }


  changeStatus(type: STATUS_TODO, id: number) {
    this.todoList.map((todo) => {
      if (todo.id === id) {
        switch (type) {
          case STATUS_TODO.DONE:
            todo.status = STATUS_TODO.DONE;
            break;
          case STATUS_TODO.TO_BE_DONE:
            todo.status = STATUS_TODO.TO_BE_DONE;
            break;
          case STATUS_TODO.RESCHEDULE:
            todo.status = STATUS_TODO.RESCHEDULE;
            break;
        }
      }
      return todo;
    })
    this.todoList$.next(this.todoList);

  }

  addTodo(todo: Todo) {
    this.todoList.push(todo);
    this.todoList$.next(this.todoList);
  }






}
