import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input()
  photoCover:string = ""
  
  @Input()
  title:string = ""
  
  @Input()
  description:string = ""

  @Input()
  Id:string = "0"

  constructor(){}
}
