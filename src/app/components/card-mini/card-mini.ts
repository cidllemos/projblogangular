import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-mini',
  imports: [],
  templateUrl: './card-mini.html',
  styleUrl: './card-mini.css'
})
export class CardMini {
  @Input()
  cardminiPhotoCover: string = ""
  
  @Input()
  cardminiTitle:string = ""

  constructor(){}

}
