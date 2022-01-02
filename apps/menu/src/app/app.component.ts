import { Component } from '@angular/core';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'mfe-poc-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'menu';

  navigateToPath(path:string){
    const observable = new Observable('menu');
    observable.publish(path);
  }
}
