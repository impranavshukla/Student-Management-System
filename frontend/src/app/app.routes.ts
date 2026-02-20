import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { SignUp } from './components/sign-up/sign-up';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Add } from './pages/add/add';
import { StudentLayout } from './layout/student-layout/student-layout';
import { TeacherLayout } from './layout/teacher-layout/teacher-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: SignUp },

  { path: 'studentLayout', component: StudentLayout },
  {
    path: 'teacherLayout',
    component: TeacherLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'add', component: Add },
      { path: 'contact', component: Contact },
    ],
  },
];
