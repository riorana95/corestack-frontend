import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Interview } from './home/interview-question/interview';
import { SectionDetailComponent } from './home/section-detail-component/section-detail-component';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'interview',
        component: Interview
    },
    {
        path: 'question-set',
        component: SectionDetailComponent
    }
];
