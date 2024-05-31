import { Routes } from '@angular/router';
import { AllComponent } from './components/pages/all/all.component';
import { ImportantComponent } from './components/pages/important/important.component';
import { CompletedComponent } from './components/pages/completed/completed.component';

export const routes: Routes = [
    {
        path: '',
        component: AllComponent
    }
    {
        path: 'important',
        component: ImportantComponent
    }
    {
        path: 'completed',
        component: CompletedComponent
    }
];
