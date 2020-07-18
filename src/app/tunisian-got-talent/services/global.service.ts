import { UserDetails } from "./../models/user.model";
import { wsUrl } from "./../../../environments/environment";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class GlobalService {

  private static connectUser = new BehaviorSubject<UserDetails>(null);
    
  constructor(private httpClient: HttpClient) {}

  getCurrentMode(): Observable<UserDetails> {
    return GlobalService.connectUser;
  }

  authenticate(userDetails: UserDetails): Observable<any> {
    return this.httpClient.post<any>(wsUrl.authentification.user, userDetails, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
