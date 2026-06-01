import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Interview } from './home/interview/interview-question/interview';
import { SectionDetailComponent } from './home/interview/section-detail-component/section-detail-component';
import { InterviewDashboard } from './home/interview/interview-dashboard';
import { TopicWise } from './home/interview/topic-wise/topic-wise';
import { Splitwise } from './home/splitwise/splitwise';
import { authGuard } from './core/auth/guards/auth.guard';
import { InterviewVault } from './home/interview/interview-vault/interview-vault';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authGuard]
    },
    {
        path: 'interview-dashboard',
        component: InterviewDashboard,
        canActivate: [authGuard]
    },
    {
        path: 'interview',
        component: Interview,
        canActivate: [authGuard]
    },
    {
        path: 'question-set',
        component: SectionDetailComponent,
        canActivate: [authGuard]
    },
    {
        path: 'interview-topic-wise',
        component: TopicWise,
        canActivate: [authGuard]
    },
    {
        path : 'interview-vault',
        component: InterviewVault,
        canActivate: [authGuard]
    },
    {
        path: 'docs',

        loadChildren: () =>
        import(
            './home/interview/topic-wise-v2/topic-wise-v2.routes'
        ).then(
            m => m.TOPIC_WISE_V2_ROUTES
        ),

        canActivate: [authGuard]
    },
    {
        path: 'splitwise',
        component: Splitwise,
        canActivate: [authGuard]
    }
];
