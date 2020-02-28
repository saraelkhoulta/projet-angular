import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit {
id:number;
isEdit:boolean;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(){
   this.route.params.subscribe((params)=>{ //pour recuperer ID,une sorte de LIstner ,une fois ID changé ,recuperer le nouveau ID
     this.id=+params['id'];
     this.isEdit=this.id===NaN;
     
   }
   )
  }

}
