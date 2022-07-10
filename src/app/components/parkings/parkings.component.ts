import { Component, OnInit } from '@angular/core';
import {Parking} from "../../models/parking";
import {ParkingService} from "../../services/parking.service";

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit {

  parking_list: Parking[] = [];
  isLoaded: Boolean = false;

  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
    this.parkingService.getParkingList().subscribe(response => {
      this.parking_list = response;
      this.isLoaded = !this.isLoaded;
    });
  }

  styleParkingStatus(parking: Parking) {
    if(parking.statut === 'OUVERT') {
      return {color: 'green'};
    } else if (parking.statut === 'ABONNES'){
      return {color: 'orange'};
    } else if (parking.statut === 'FERME'){
      return {color: 'red'};
    } else {
      return {'font-style': 'italic'};
    }
  }
}
