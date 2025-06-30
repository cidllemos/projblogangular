import { Component } from '@angular/core';
import { Title } from '../../components/title/title';
import { Card } from '../../components/card/card';
import { CardMini } from '../../components/card-mini/card-mini';


@Component({
  selector: 'app-home-component',
  imports: [Title, Card, CardMini],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

}
