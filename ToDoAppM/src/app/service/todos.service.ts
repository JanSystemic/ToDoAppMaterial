import { Injectable } from '@angular/core';
import { Todos } from '../model/todos';
import { TODO_ITEMS } from '../../data/todo-data';

@Injectable()
export class TodosService {
  _todoList: Todos[] = TODO_ITEMS;

  constructor() { }

  addTodo(todos: Todos) {
    todos.Nr = this._todoList.length + 1;
    this._todoList.push(todos);
    }

    removeTodo(nr: number) {
      const todos = this._todoList.findIndex(c => c.Nr === nr);
      this._todoList.splice(todos, 1);
      }

    getAllTodos() {
        return this._todoList;
        }

    editTodo(todo: Todos) {
      const index = this._todoList.findIndex(c => c.Nr === todo.Nr);
      this._todoList[index] = todo;
    }


}


