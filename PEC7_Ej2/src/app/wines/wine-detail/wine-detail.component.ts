import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Wine } from 'src/app/models/wine';
import { WineServiceService } from 'src/app/services/wine-service.service';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent {
  public wine:Wine;
  public wine$:Observable<Wine>;
  public wineClasses = {};

  constructor(private wineS:WineServiceService, ruta:ActivatedRoute){
    this.wine = {id:0, name:'', imageUrl: '', price:0, isOnSale:false, quantityInCart: 0, total: 0, foodPairing: []};
    const idWine = ruta.snapshot.paramMap.get('id');
    this.wine$ = wineS.getWineDetails(idWine);
    this.wine$.subscribe((w:Wine) => this.wine = w);
  }
  ngOnInit(){
    this.wineClasses = {
      enVenda: this.wine.isOnSale,
      noDisponible: !this.wine.isOnSale}
      console.log(this.wineClasses);
      
    }
    
}
