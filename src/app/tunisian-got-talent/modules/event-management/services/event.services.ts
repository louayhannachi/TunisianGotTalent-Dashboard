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
    return this.httpClient.get<any>(wsUrl.event.events.getAll, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  getById(id): Observable<any> {
    const url = StringFormat(wsUrl.event.events.getById, id);
    return this.httpClient.get<any>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  delete(id): Observable<any> {
    const url = StringFormat(wsUrl.event.events.delete, id);
    return this.httpClient.delete<any>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  participer(id): Observable<any> {
    const url = StringFormat(wsUrl.event.events.participer, id);
    return this.httpClient.get<any>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  getAllCategory():Observable<any>  {
    return this.httpClient.get<any>(wsUrl.event.category.getAll, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }


  deleteCategory(id):Observable<any>{
    const url = StringFormat(wsUrl.event.category.delete, id);
    return this.httpClient.delete<any>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  createEvent(event :any):Observable<any>{
    return this.httpClient.post<any>(wsUrl.event.events.create, event,{
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  createCategory(event :any):Observable<any>{
    return this.httpClient.post<any>(wsUrl.event.category.create, event,{
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
