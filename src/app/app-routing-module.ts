import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index } from './pages/index';
import { Posts } from './pages/posts/posts';
import { SinglePost } from './pages/single-post/single-post';
import { Login } from './pages/login/login';
import { ActualLogin } from './pages/actual-login/actual-login';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path: "" , component:Index},
  {path: "posts" , component:Posts},
  {path: "posts/:postId" , component:SinglePost},
  {path: "login" , component:Login},
  {path:'loginapi' , component :ActualLogin},
  {path:'profile' , component :ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
