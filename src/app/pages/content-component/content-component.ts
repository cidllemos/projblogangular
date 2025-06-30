import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content-component',
  imports: [RouterModule],
  templateUrl: './content-component.html',
  styleUrl: './content-component.css'
})
export class ContentComponent implements OnInit{
    @Input()
    contentPhotoCover:string = ""
    
    @Input()
    contentTitle:string = ""
    
    @Input()
    contentDescription:string = ""

    private id: string | null = "0"

    constructor(private route:ActivatedRoute){}

    ngOnInit() : void {
      this.route.paramMap.subscribe( value => 
        this.id = value.get("id")
      )

      this.setaluesToComponent(this.id)
    }

    setaluesToComponent(id: string | null){
      const result = dataFake.filter(articles =>
        articles.id.toString() == id
      )[0]

      this.contentTitle = result.title
      this.contentPhotoCover = result.photoCover
      this.contentDescription = result.description
    }
}
