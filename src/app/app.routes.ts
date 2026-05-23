import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Interview } from './home/interview/interview-question/interview';
import { SectionDetailComponent } from './home/interview/section-detail-component/section-detail-component';
import { InterviewDashboard } from './home/interview/interview-dashboard';
import { Splitwise } from './home/splitwise/splitwise';

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
        path: 'interview-dashboard',
        component: InterviewDashboard
    },
    {
        path: 'interview',
        component: Interview
    },
    {
        path: 'question-set',
        component: SectionDetailComponent
    },
    {
        path: 'splitwise',
        component: Splitwise
    }
];
