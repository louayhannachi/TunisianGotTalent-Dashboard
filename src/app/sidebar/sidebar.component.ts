import { Router } from "@angular/router";
import { GlobalService } from "./../tunisian-got-talent/services/global.service";
import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  child?: RouteInfo[];
  openSubMenu?: boolean;
}
export const ROUTES: RouteInfo[] = [
  {
    path: null,
    title: "Talent Management",
    icon: "pe-7s-medal",
    class: "",
    openSubMenu: false,
    child: [
      {
        path: "/TalentStatistics",
        title: "Talent statistic",
        icon: "pe-7s-graph",
        class: "",
      }
    ],
  },
  {
    path: "/business",
    title: "Business Management",
    icon: "pe-7s-user",
    class: "",
  },
  {
    path: null,
    title: "Event Management",
    icon: "pe-7s-note2",
    class: "",
    openSubMenu: false,
    child: [
      { path: "/event", title: "Event List", icon: "pe-7s-menu", class: "" },
      {
        path: "/createEvent",
        title: "Create Event",
        icon: "pe-7s-plus",
        class: "",
      },
      {
        path: "/category",
        title: "Category List",
        icon: "pe-7s-menu",
        class: "",
      },
      {
        path: "/createCategory",
        title: "Create Category",
        icon: "pe-7s-plus",
        class: "",
      },
      {
        path: "/RatingStatistique",
        title: "Rating Statistique",
        icon: "pe-7s-graph1",
        class: "",
      },
    ],
  },
  {
    path: "/forum",
    title: "Forum Management",
    icon: "pe-7s-news-paper",
    class: "",
    openSubMenu: false,
  },
  {
    path: "/competitions",
    title: "Competition Management",
    icon: "pe-7s-science",
    class: "",
    openSubMenu: false,
    child: [
      {
        path: "/competitions/create",
        title: "Create Competition",
        icon: "pe-7s-plus",
        class: ""
      },
      {
        path: "/competitions/statistics",
        title: "Competition statistic",
        icon: "pe-7s-graph",
        class: ""
      },
    ]
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
  connectedUser: any;
  constructor(private globalService: GlobalService, private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.getConnectedUser();
  }

  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((connectedUser) => {
      console.log(connectedUser);
      this.connectedUser = connectedUser;
    });
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  navigateToPath(path) {
    if (path) this.router.navigate([path]);
  }

  openSubMenu() {
    this.showSubMenu = true;
  }
}
