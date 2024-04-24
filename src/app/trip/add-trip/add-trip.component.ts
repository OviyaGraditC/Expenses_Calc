import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent implements OnInit{

  constructor(){}

  addTripForm : any;

  ngOnInit(): void {
    
    this.addTripForm = new FormGroup({
      tripName : new FormControl('', Validators.required),
      tripDescription : new FormControl(''),
      tripMemberCount : new FormControl(5,Validators.max(10)),
      plannedBudget : new FormControl('')
    });
  }

  onFormSubmit(){
    console.log(this.addTripForm);
    
  }
}
