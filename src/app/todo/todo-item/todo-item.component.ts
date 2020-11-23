import {Component, Input, OnInit} from '@angular/core';
import {TodoItemInterface} from '../../interface/todo-item.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: TodoItemInterface;
  ngOnInit(): void {
  }
}
