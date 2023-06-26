import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  conditionExpression = 1;
  colorFlg: boolean = true;
  attr: string = 'pink';
}
