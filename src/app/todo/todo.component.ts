import { Component, OnInit } from '@angular/core';
import {TodoItemInterface} from '../interface/todo-item.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoListItems: TodoItemInterface[] = [];

  addTodoItemToList(newTodoItem: TodoItemInterface): void {
    this.todoListItems.push(newTodoItem);
  }

  removeTodoItemFromList(idx: number) {
    this.todoListItems = this.todoListItems.filter((todoItem, index) => index !== idx);
  }

  ngOnInit(): void {
    this.todoListItems.push({title: '1221', text: '3232323'});
  }
}
