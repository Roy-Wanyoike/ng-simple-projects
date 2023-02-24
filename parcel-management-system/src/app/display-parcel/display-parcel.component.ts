import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parcel, ParcelList } from '../interface/parcel';
import { ParcelService } from '../Services/parcel.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-parcel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-parcel.component.html',
  styleUrls: ['./display-parcel.component.css']
})
export class DisplayParcelComponent implements OnInit{
   parcel:ParcelList[]=[]
  name: any;
  destination: any;
  email: any;

   constructor(private parcelService:ParcelService , private router:Router, 
    private route:ActivatedRoute){}

    ngOnInit(): void {
      this.parcelService = this.parcelService
       console.log(this.parcel);
    }
    LoadAdd(){
      this.router.navigate(['2'], {relativeTo:this.route})
    }
  
    showParcel(){
      this.router.navigate([''],{relativeTo:this.route})
    }
    UpdateParcel(){
      this.name.setValue(this.name),
      this.destination.setValue(this.destination),
      this.email.setValue(this.email)
    }
}
