import { Component } from '@angular/core';
import { Wine } from 'src/app/models/wine';
import { WineQuantityChange } from 'src/app/interfaces/wine-quantity-change'; 
import { Observable } from 'rxjs';
import { WineServiceService } from 'src/app/services/wine-service.service';
import { Subject } from 'rxjs';
import { debounceTime, switchMap,
  distinctUntilChanged, startWith,
  share } from 'rxjs/operators';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent {

  public wines$: Observable<Wine[]>;
  
  public total: any;
  public msg: any;
  public message:any = null;
  public searchString:any = '';
  private searchTerms: Subject<string> = new Subject();

  constructor(public SWine: WineServiceService) {

    //Inicialitzem la llista de vins mitjançant el servei amb el métode getWines

    this.wines$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.SWine.getWines(query)),
      share()
    );


    this.wines$ = this.SWine.getWines(this.searchString)
    this.wines$.subscribe((w:Wine[])=>{
      SWine.putWines(w);})
   
  }
  addGetWine(e: WineQuantityChange) {
    this.SWine.changeQuantity(e.id,1).subscribe((result: any) => {
      this.message = result.msg;    
      }, (err) => {
      this.message = err.error.msg;
    });
    
  }
  substractGetWine(e:WineQuantityChange) {
    this.SWine.changeQuantity(e.id,-1).subscribe((result: any) => {
      this.message = result.msg;   
    }, (err) => {
      this.message = err.error.msg;
    });
  }

  search(){
    this.wines$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.SWine.getWines(query)),
      share()
    );
    //Aquí passem els vins a una variable per poder gestonar les dades en pantalla
    this.wines$.subscribe((w:Wine[])=>{
    this.SWine.putWines(w);})
  }
}
