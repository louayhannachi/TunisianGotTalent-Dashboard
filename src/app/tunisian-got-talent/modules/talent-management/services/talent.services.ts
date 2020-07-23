import { Profil, Rating } from "./../models/profil.model";
import { wsUrl } from "./../../../../../environments/environment";
import { StringFormat } from "app/tunisian-got-talent/utils/SharedResources";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class talentService {
  constructor(private httpClient: HttpClient) {}

  getLikesPerProfil(): Observable<any> {
    return this.httpClient.get<any>(wsUrl.talent.getLikesPerProfil, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  getCommentsPerProfil(): Observable<any> {
    return this.httpClient.get<any>(wsUrl.talent.getCommentsPerProfil, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
