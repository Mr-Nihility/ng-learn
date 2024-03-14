import { Routes } from '@angular/router';
import { AuthGuard } from "./authGuard";

export const routes: Routes = [
  {
    title: "Home",
    path: "home",
    loadComponent: async () => (await import("./components/home-view/home-view.component")).default,
    canActivate: [
      AuthGuard
    ],
    pathMatch: "full"
  },
  {
    title: "Login",
    path: "login",
    loadComponent: async () => (await import("./components/login-view/login-view.component")).default,
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'breed',
    pathMatch: "full",
    loadComponent: async () => (await import("./components/breed-view/breed-view.component")).default,
  },
  {
    path: 'vote',
    pathMatch: "full",
    loadComponent: async () => (await import("./components/vote-view/vote-view.component")).default,
  },
  {
    path: 'gallery',
    pathMatch: "full",
    loadComponent: async () => (await import("./components/gallery-view/gallery-view.component")).default,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: "full"
  },
];
