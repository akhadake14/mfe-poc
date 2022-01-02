import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule,Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';


const routes: Route[] = [
  {
    path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  {
    path:'',
    outlet:'menu',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        type:'module',
        exposedModule: './Remote',
      }).then((m) => m.AppModule),

  },
  {
    path: 'home',
    outlet:'',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4305/remoteEntry.js',
        type:'module',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  {
    path: 'about',
    outlet:'',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4306/remoteEntry.js',
        type:'module',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
