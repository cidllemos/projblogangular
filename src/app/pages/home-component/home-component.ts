import { Component } from '@angular/core';
import { Title } from '../../components/title/title';
import { Card } from '../../components/card/card';
import { CardMini } from '../../components/card-mini/card-mini';
import { Menu } from '../../components/menu/menu';


@Component({
  selector: 'app-home-component',
  imports: [Title, Card, CardMini,Menu],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

}
