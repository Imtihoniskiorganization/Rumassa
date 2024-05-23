import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/CRUDs/crud.service';
import { Delivery } from '../../models/delivery';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-adres-dostavki',
  templateUrl: './adres-dostavki.component.html',
  styleUrl: './adres-dostavki.component.scss'
})
export class AdresDostavkiComponent implements OnInit{

  resultData! : Delivery;
  setValue: Delivery= {
    fullName : "",
    email : "",
    country : "",
    region : "",
    city : "",
    index : "",
    streetHouse : "",
    details : ""
  }
  constructor(private crudService : CrudService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createDelevery(data : Delivery){
    this.crudService.createDelivery(data).subscribe({
      next: (result) =>{
        this.resultData = result;
        console.log(result)
      },
      error: (err) =>{
        console.log(err)
      }
    });
  }

  setDelevery(){
    this.createDelevery(this.setValue)
  }

}
