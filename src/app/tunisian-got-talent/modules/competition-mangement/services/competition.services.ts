import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class competitionService {
  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<any> {
    return this.http.get('/tgt/competition/getAll');
  }

  createComp(competition): Observable<any> {
    return this.http.put('/tgt/competition/create', competition);
  }


  deleteComp(compId): Observable<any> {
    return this.http.delete('/tgt/competition/delete/' + compId);
  }

  editCompetition(competition): Observable<any> {
    return this.http.post('/tgt/competition/' + competition.id + '/edit', competition);
  }

  getCompParticipations(): Observable<any> {
    return this.http.get('/tgt/competition/getParticipations');
  }

  getCompRatings(): Observable<any> {
    return this.http.get('/tgt/competition/getRatings');
  }

}