import { Profil, Rating } from './../models/profil.model';
import { wsUrl } from './../../../../../environments/environment';
import { StringFormat } from 'app/tunisian-got-talent/utils/SharedResources';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
  })
  export class talentService {
    constructor(private httpClient: HttpClient){}

    /**************Profil Services*****************/

    getProfilById(id): Observable<any> {
      const url = StringFormat(wsUrl.talent.profil.getById , id);
      return this.httpClient.get<any>(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    getAllProfils(): Observable<any> {
      return this.httpClient.get<any>(wsUrl.talent.profil.getAll, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    deleteProfil(id): Observable<any>{
      const url = StringFormat(wsUrl.talent.profil.delete , id);
      return this.httpClient.delete<any>(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    createProfil(profil: Profil): Observable<any>{
      return this.httpClient.put<any>(wsUrl.talent.profil.create, profil, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    updateProfil(profil: Profil): Observable<any>{
      return this.httpClient.post<any>(wsUrl.talent.profil.edit, profil, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }); 
    }

    /**************Rating Services*****************/

    getAllRatings(): Observable<any>{
      return this.httpClient.get<any>(wsUrl.talent.rating.getAll, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    getRatingsByProfilId(id): Observable<any>{
      const url = StringFormat(wsUrl.talent.rating.getAll , id);
      return this.httpClient.get<any>(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    deleteRating(id): Observable<any>{
      const url = StringFormat(wsUrl.talent.rating.delete , id);
      return this.httpClient.delete<any>(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    rate(rating: Rating): Observable<any>{
      return this.httpClient.put<any>(wsUrl.talent.rating.create, rating,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    editRating(rating: Rating): Observable<any>{
      return this.httpClient.post<any>(wsUrl.talent.rating.edit, rating,{
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    
  }