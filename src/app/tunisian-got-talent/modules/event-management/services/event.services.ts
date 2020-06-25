import { EventModel } from "./../models/event.model";
import { wsUrl } from "./../../../../../environments/environment";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StringFormat } from "app/tunisian-got-talent/utils/SharedResources";

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get<any>(wsUrl.event.getAll, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  getById(id): Observable<any> {
    const url = StringFormat(wsUrl.event.getById , id);
    return this.httpClient.get<any>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  create(event: EventModel): Observable<any> {
    let url = 
    wsUrl.event.create
    .concat("?titre=")
    .concat(event.titre)
    .concat("&description=")
    .concat(event.description)
    .concat("&nbparticipant=")
    .concat(event.nbparticipant)
    .concat("&date=")
    .concat(event.date);
    return this.httpClient.get<any>(
      url,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  edit(event: EventModel): Observable<any> {
    let url = 
    StringFormat(wsUrl.event.edit , event.id)
    .concat("?titre=")
    .concat(event.titre)
    .concat("&description=")
    .concat(event.description)
    .concat("&nbparticipant=")
    .concat(event.nbparticipant)
    .concat("&date=")
    .concat(event.date);
    return this.httpClient.get<any>(
      url,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  delete(id): Observable<any> {
    const url = StringFormat(wsUrl.event.delete , id);
    return this.httpClient.delete<any>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  participer(id): Observable<any> {
    const url = StringFormat(wsUrl.event.participer , id);
    return this.httpClient.get<any>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
