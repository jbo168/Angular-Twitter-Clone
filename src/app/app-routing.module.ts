import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'favourites', component: FavouritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
