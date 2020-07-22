import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  child?: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/url",
    title: "Talent Management",
    icon: "pe-7s-medal",
    class: "",
    child: [
      {
        path: "/TalentStatistics",
        title: "Talent statistic",
        icon: "pe-7s-graph1",
        class: "",
      },
      {
        path: "/talentList",
        title: "Talent List",
        icon: "pe-7s-menu",
        class: "",
      },
      {
        path: "/TalenBlockedList",
        title: "Talent Blocked List",
        icon: "pe-7s-less",
        class: "",
      },
    ],
  },
  {
    path: "/business",
    title: "Business Management",
    icon: "pe-7s-user",
    class: "",
  },
  {
    path: "/event",
    title: "Event Management",
    icon: "pe-7s-note2",
    class: "",
    child: [
      { path: "/event", title: "Event List", icon: "pe-7s-menu", class: "" },
      { path: "/createEvent", title: "Create Event", icon: "pe-7s-plus", class: "" },
      { path: "/category", title: "Category List", icon: "pe-7s-menu", class: "" },
      { path: "/createCategory", title: "Create Category", icon: "pe-7s-plus", class: "" },
      { path: "/RatingStatistique", title: "Rating Statistique", icon: "pe-7s-graph1", class: "" }
    ],
  },
  {
    path: "/forum",
    title: "Forum Management",
    icon: "pe-7s-news-paper",
    class: "",
  },
  {
    path: "/competition",
    title: "Competition Management",
    icon: "pe-7s-science",
    class: "",
  },
  // { path: '/maps', title: 'Maps (tools)',  icon:'pe-7s-map-marker', class: '' },
  // { path: '/notifications', title: 'Notifications (tools)',  icon:'pe-7s-bell', class: '' }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  showSubMenu: boolean;

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    console.log("menuItems", this.menuItems);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
  openSubMenu() {
    this.showSubMenu = true;
  }
}
