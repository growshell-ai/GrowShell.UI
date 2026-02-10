import { Routes } from '@angular/router';
import { JobsearchComponent } from './core/components/jobsearch/jobsearch.component';
import { LandingComponent } from './core/components/landing/landing.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'jobs', component: JobsearchComponent },
    { path: '**', redirectTo: '' }
  ];