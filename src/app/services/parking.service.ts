import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Parking} from "../models/parking";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient: HttpClient) { }

  getParkingList(): Observable<Parking[]> {
    return this.httpClient.get<Parking[]>(environment.api_url + '/parkings');
  }
}
