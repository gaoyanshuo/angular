import { Component } from '@angular/core';

@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.scss'],
})
export class ReserveFormComponent {
  reserveInfo: any = {
    name: '',
    gender: '',
    city: '',
    hobbies: [
      { key: 'food', value: '吃饭', checked: false },
      { key: 'sleep', value: '睡觉', checked: false },
      { key: 'doudou', value: '打豆豆', checked: false },
    ],
    password: '',
    email: '',
  };
  cityList: any[] = ['Tokyo', 'Kanagawa', 'Chiba'];

  ngModelSubmit() {
    console.log(this.reserveInfo);
  }
}
