import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StringFormat } from "app/tunisian-got-talent/utils/SharedResources";
import { wsUrl } from "environments/environment";

@Injectable({
    providedIn: "root"
  })
  export class forumService {
    constructor(private httpClient: HttpClient){}

    getAll():Observable<any> {
      return this.httpClient.get("/tgt/articles", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    delete(id): Observable<any> {
      //const url = StringFormat(wsUrl.forum.delete, id);
      //return this.httpClient.delete<any>(url, {
        return this.httpClient.delete("/tgt/article/delete/"+id, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  }

