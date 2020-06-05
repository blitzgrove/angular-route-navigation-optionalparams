import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  todo = {
    done: true,
    id: '2',
    name: 'Groceries',
    urgency: 'high',
    description: 'Get groceries immediately'
  }

  constructor(private _router: Router) { }

  gotoEdit() {
    this._router.navigate(['/editTodo', {todo: JSON.stringify(this.todo)}]);
  }
}
