import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-mini',
  imports: [RouterModule],
  templateUrl: './card-mini.html',
  styleUrl: './card-mini.css'
})
export class CardMini {
  @Input()
  photoCover: string = ""
  
  @Input()
  description:string = ""

  @Input()
  Id:string = "0"

  constructor(){}

}
