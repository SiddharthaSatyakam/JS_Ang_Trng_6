import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNum: number[]=[];
  eveNum: number[]=[];
  onIntFir(eve: number){
    if(eve % 2 === 0){this.eveNum.push(eve);}
    else{
      this.oddNum.push(eve);
    }
  }
}


