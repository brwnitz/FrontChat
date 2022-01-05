import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LiveChatComponent } from './views/livechat/livechat.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'live-chat',component:LiveChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
