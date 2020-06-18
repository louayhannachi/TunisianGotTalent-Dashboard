import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/talent', title: 'Talent Management',  icon: 'pe-7s-medal', class: '' },
    { path: '/business', title: 'Business Management',  icon:'pe-7s-user', class: '' },
    { path: '/event', title: 'Event Management',  icon:'pe-7s-note2', class: '' },
    { path: '/forum', title: 'Forum Management',  icon:'pe-7s-news-paper', class: '' },
    { path: '/competition', title: 'Competition Management',  icon:'pe-7s-science', class: '' },
    // { path: '/maps', title: 'Maps (tools)',  icon:'pe-7s-map-marker', class: '' },
    // { path: '/notifications', title: 'Notifications (tools)',  icon:'pe-7s-bell', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
