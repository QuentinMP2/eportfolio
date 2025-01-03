import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { TravelsComponent } from './components/travels/travels.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EngagementComponent } from './components/engagement/engagement.component';
import { CareerComponent } from './components/career/career.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent
}, {
    path: 'projects',
    component: ProjectsComponent
}, {
    path: 'hobbies',
    component: HobbiesComponent
}, {
    path: 'travels',
    component: TravelsComponent
}, {
    path: 'engagement',
    component: EngagementComponent
}, {
    path: 'career',
    component: CareerComponent
}, {
    path: '**',
    component: NotfoundComponent
}];
