import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.scss'],
})
export class ReserveFormComponent {
  constructor() {}

  ngOnInit(): void {
    this.addContract();
    // this.buildCityList();
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
  hobbies: any[] = [
    { key: 'food', value: '吃饭' },
    { key: 'sleep', value: '睡觉' },
    { key: 'doudou', value: '打豆豆' },
  ];

  reserveInfoGroup: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
    }),
    gender: new FormControl(),
    city: new FormControl(),
    hobbies: new FormArray(this.buildCityList()),
    password: new FormControl(),
    email: new FormControl(),
    contract: new FormArray([]),
  });
  cityList: any[] = ['Tokyo', 'Kanagawa', 'Chiba'];

  get hobby() {
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

  /**
   * build mul checkbox FormControl
   */
  buildCityList() {
    // A:
    // const hobbiesList: any = this.hobbies
    //   .map(() => new FormControl(false))
    //   .map((e, i) => this.hobby.setControl(i, e));
    // console.log('hobbiesList', hobbiesList);
    // console.log('hobby', this.hobby);

    // B: 
    return this.hobbies.map(() => new FormControl(false))
  }
}
