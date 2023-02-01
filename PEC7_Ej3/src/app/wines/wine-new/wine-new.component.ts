import { ChangeDetectionStrategy, Component, Input, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Wine } from 'src/app/models/wine';
import { WineServiceService } from 'src/app/services/wine-service.service';
import { ValidacionsPropies } from 'src/app/validacions/validacions-propies';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WineNewComponent {
public wineForm: FormGroup;
public missatge:string = '';

constructor(private fb:FormBuilder, private wineS: WineServiceService){
  this.wineForm = this.fb.group({             
    name: [null, [Validators.required, ValidacionsPropies.NameWineValidator]],         
    price: [0, [Validators.required, Validators.min(1)]],
    imageURL: [null],
    isOnSale: [false,[]]
  });
}
createWine() {
  let valors = this.wineForm.value;
  let Nwine:Wine = {id: 0,name: valors.name,imageUrl: `assets/images/${valors.imageURL}`, price: valors.price, isOnSale: valors.isOnSale, quantityInCart: 0, total: valors.price, foodPairing: []}
  this.wineForm.reset();
  this.wineS.create(Nwine).subscribe(
    (res:any)=>{
      this.missatge='Vino Creado correctamente';
      },
    (err)=>{
      this.missatge = 'Error'})
    }
}
