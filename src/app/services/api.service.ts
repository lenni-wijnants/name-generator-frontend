import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Candidate} from '../../model/Candidate';
import {Observable} from 'rxjs';
import {Character} from '../../model/Character';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://nexios-name-generator.herokuapp.com';

  constructor(private http: HttpClient) { }

  create(candidate: Candidate): Observable<Character> {
    return this.http.post(this.baseUrl + '/api/candidate', candidate) as Observable<Character>;
  }

  find(email: string): Observable<Character> {
    return this.http.get(this.baseUrl + '/api/character/' + email) as Observable<Character>;
  }

  getAll(): Observable<Character[]> {
    return this.http.get(this.baseUrl + '/api/character') as Observable<Character[]>;
 }
}
