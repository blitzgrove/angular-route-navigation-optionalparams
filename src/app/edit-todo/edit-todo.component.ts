import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  todo: any;
  constructor(private _actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.todo = JSON.parse(this._actRoute.snapshot.paramMap.get('todo'));
  }
}