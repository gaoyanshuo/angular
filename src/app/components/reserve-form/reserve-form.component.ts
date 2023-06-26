import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.scss'],
})
export class ReserveFormComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.addContract();
  }
  // ngModel
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

  // FormGroup FormArray
  reserveInfoGroup: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
    }),
    gender: new FormControl(),
    city: new FormControl(),
    // hobbies: new FormArray([
    //   { key: 'food', value: '吃饭', checked: false },
    //   { key: 'sleep', value: '睡觉', checked: false },
    //   { key: 'doudou', value: '打豆豆', checked: false },
    // ]),
    password: new FormControl(),
    email: new FormControl(),
    contract: new FormArray([]),
  });
  cityList: any[] = ['Tokyo', 'Kanagawa', 'Chiba'];

  get hobbies() {
    return this.reserveInfoGroup.get('hobbies') as FormArray;
  }

  // get contract FormArray
  get contracts() {
    return this.reserveInfoGroup.get('contract') as FormArray;
  }

  /**
   * ngModel Submit
   */
  ngModelSubmit() {
    console.log(this.reserveInfo);
  }

  /**
   * formGroup submit
   */
  formGroupSubmit() {
    console.log(this.reserveInfoGroup); // 1 way
    console.log(this.reserveInfoGroup.get('name')); //2 way
    console.log(this.reserveInfoGroup.get(['name', 'firstName'])); //2 way-child
  }

  /**
   * 动态添加FormArray
   */
  addContract() {
    const contract = new FormGroup({
      tel: new FormControl(),
      addr: new FormControl(),
    });
    this.contracts.push(contract);
  }
  /**
   * 动态删除FormArray
   */
  removeContract(i: any) {
    this.contracts.removeAt(i);
  }
}
