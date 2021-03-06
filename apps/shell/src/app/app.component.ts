import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'mfe-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';

  /**
   *
   */
  constructor(private router: Router) {
    const observable = new Observable('menu');
    observable.subscribe((path) =>{
    this.router.navigate([path]);
    });
    

  }
}
