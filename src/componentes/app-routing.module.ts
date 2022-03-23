import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    loadChildren: () => import('../app/pages/tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'rewards',
    loadChildren: () => import('../app/pages/rewards/rewards.module').then( m => m.RewardsPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../app/pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'my-tasks',
    loadChildren: () => import('../app/pages/my-tasks/my-tasks.module').then( m => m.MyTasksPageModule)
  },
  {
    path: 'my-score',
    loadChildren: () => import('../app/pages/my-score/my-score.module').then( m => m.MyScorePageModule)
  },
  {
    path: 'my-rewards',
    loadChildren: () => import('../app/pages/my-rewards/my-rewards.module').then( m => m.MyRewardsPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('../app/pages/ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../app/pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'family',
    loadChildren: () => import('../app/pages/family/family.module').then( m => m.FamilyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
