import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4/tab4.page';
import { Tab4PageModule } from './tab4/tab4.module';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { Tab1PageModule } from './tab1/tab1.module';
import { Tab2PageModule } from './tab2/tab2.module';
import { Tab3PageModule } from './tab3/tab3.module';
import { ResumePage } from './resume/resume.page';
import { ResumePageModule } from './resume/resume.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tab1', component: Tab1Page },
  { path: 'tab2', component: Tab2Page },
  { path: 'tab3', component: Tab3Page },
  { path: 'tab4', component: Tab4Page },
  { path: 'resume', component:  ResumePage},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    Tab1PageModule,
    Tab2PageModule,
    Tab3PageModule,
    Tab4PageModule,
    ResumePageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
