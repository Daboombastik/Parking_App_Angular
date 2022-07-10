import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Parking} from "../models/parking";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient: HttpClient) { }

  getParkingList(): Observable<Parking[]> {
    return this.httpClient.get<Parking[]>('http://localhost:8080/api/parkings');
  }
}
