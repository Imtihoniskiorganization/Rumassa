import { Component } from '@angular/core';
import { Delivery } from '../../interfaces/delivery';
import { DeliveryService } from '../../services/CRUDs/delivery.service';

@Component({
  selector: 'app-adres-dostavki',
  templateUrl: './adres-dostavki.component.html',
  styleUrl: './adres-dostavki.component.scss'
})
export class AdresDostavkiComponent {

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
  constructor(private deliveryService : DeliveryService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createDelevery(data : Delivery){
    this.deliveryService.createDelivery(data).subscribe({
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
