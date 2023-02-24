import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParcelService } from '../Services/parcel.service';
import { Parcel } from '../interface/parcel';

@Component({
  selector: 'app-add-parcel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent implements OnInit {
  constructor( private fb: FormBuilder, private parcelsService:ParcelService) {

  }
  addparcelForm!:FormGroup
  ngOnInit(): void {
    this.addparcelForm= this.fb.group({
      name:[null, Validators.required],
      destination:[null, Validators.email],
      email:[null, Validators.required]
    })
  }

  addparcels(){
    let parcel :Parcel= {...this.addparcelForm.value, id:Math.floor(Math.random() *10000)};
    this.parcelsService.addParcelForm
  }
}
