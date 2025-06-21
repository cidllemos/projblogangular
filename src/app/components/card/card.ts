import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input()
  cardPhotoCover:string = ""
  
  @Input()
  cardTitle:string = ""
  
  @Input()
  cardDescription:string = ""
  constructor(){}
}
