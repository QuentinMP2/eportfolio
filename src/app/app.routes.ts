import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent
}, {
    path: '**',
    component: NotfoundComponent
}];
