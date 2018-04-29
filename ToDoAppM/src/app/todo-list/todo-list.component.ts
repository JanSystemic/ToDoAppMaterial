import { TodoComponent } from './../todo/todo.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  isModalOpened = false;

  constructor(private dialog?:MatDialog,
  private _todosService?: TodosService) { }

  ngOnInit() {
  }

  get TodoList() {
    return this._todosService.getAllTodos();
  }

  addTodo() {
    this.isModalOpened = true;
    const dialogRef = this.dialog.open(TodoComponent, {
      width: '1250px',
      panelClass: 'custom-dialog',
      data: {}
    });

  dialogRef.afterClosed().subscribe(result => {
    this.isModalOpened = false;
  });
}

editTodo(nr: number) {
  this.isModalOpened = true;
  const todos = this._todosService.getAllTodos().find(c => c.Nr === nr);
  const dialogRef = this.dialog.open(TodoComponent, {
    width: '1250px',
    panelClass: 'custom-dialog',
    data: todos
  });

}
  removeTodo(nr: number) {
    this._todosService.removeTodo(nr);
  }

}
