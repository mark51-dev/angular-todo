import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Output() addTodoItemToList: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required)
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.addTodoItemToList.emit(this.form.value);
    this.form.reset();
  }
}
