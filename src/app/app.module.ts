import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

// contains all routes
// no slash in path
// just constants
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      // passing values by hard coding is not that great
      // { path: 'users/1', component: UserComponent },
      // :id is a placeholder for the value and we can dynamically pass values to it
      { path: ':id/:name', component: UserComponent },
    ]
  },
  // the below are duplicating and also loads a new page
  // so can nest them under servers
  {
    path: 'servers', component: ServersComponent, children: [
      // no need to append server
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // this is simple import
    // RouterModule
    // need to register routes
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
