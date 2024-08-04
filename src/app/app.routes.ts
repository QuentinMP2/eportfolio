import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { EngineeringComponent } from './pages/engineering/engineering.component';
import { InternationalComponent } from './pages/international/international.component';
import { SustainabilityComponent } from './pages/sustainability/sustainability.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { CareerComponent } from './pages/career/career.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
}, {
    path: 'welcome',
    component: WelcomeComponent
}, {
    path: 'engineering',
    component: EngineeringComponent
}, {
    path: 'international',
    component: InternationalComponent
}, {
    path: 'sustainability',
    component: SustainabilityComponent
}, {
    path: 'hobbies',
    component: HobbiesComponent
}, {
    path: 'career',
    component: CareerComponent
}, {
    path: '**',
    component: NotfoundComponent
}];
