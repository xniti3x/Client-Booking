import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn,Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})


export class ReservationTableComponent {

  
  form: FormGroup;
  ordersData = [];

  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: new FormArray([], minSelectedCheckboxes(1)),
      radios: ['0',[Validators.required] ]
    });

    // async orders
    of(this.getOrders()).subscribe(orders => {
      this.ordersData = orders;
      this.addCheckboxes();
    });

    // synchronous orders
    // this.ordersData = this.getOrders();
    // this.addCheckboxes();
  }

  private addCheckboxes() {
    this.ordersData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  getOrders() {
    return [
      {
        id: "6",
        name: "Room 6",
        kategorie: "Dreibettzimmer",
        beschreibung: "Doppelbett + Einzelbett gro\u00dfes Zimmer, Balkon ca 25qm mit Standardausr\u00fcstung",
        preis1: 65,
        preis2: 90,
        preis3: 109
      },
      {
        id: "7",
        name: "Room 7",
        kategorie: "Einzelzimmer",
        beschreibung: "Doppelbett + Einzelbett gro\u00dfes Zimmer, Balkon ca 25qm mit Standardausr\u00fcstung",
        preis1: 65,
        preis2: 0,
        preis3: 0,
      },
      {
        id: "16",
        name: "Room 16",
        kategorie: "Doppelzimmer",
        beschreibung: "Doppelbett",
        preis1: 65,
        preis2: 90,
        preis3: 0,
      }
    ];
    
  }

  submit() {
    console.log(this.form.value);
    const selectedOrderIds = this.form.value.orders
      .map((checked, i) => checked ? this.ordersData[i].id : null)
      .filter(v => v !== null);

    console.log(selectedOrderIds);
  }
}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
