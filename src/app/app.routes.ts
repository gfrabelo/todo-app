import { Routes } from '@angular/router';
import { AllComponent } from './components/pages/all/all.component';
import { CompletedComponent } from './components/pages/completed/completed.component';

export const routes: Routes = [
    {
        path: '',
        component: AllComponent
    },
    {
        path: 'completed',
        component: CompletedComponent
    }
];
