import { Component, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';
import { MyValidators } from 'src/app/myValidators';
@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.scss'],
})
export class ReserveFormComponent {
  @ViewChild('side') side: any;

  constructor(private fb: FormBuilder) {
    this.contractForm = this.fb.group({
      fullName: this.fb.group({
        firstName: ['', Validators.required],
        lastName: [''],
      }),
    });
  }

  ngOnInit(): void {
    this.addContract();
    this.valueChange();
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

  // FormBuilder
  // this.fb.control -> FormControl
  // this.fb.group -> FormGroup
  // this.fb.array => FormArray
  contractForm: FormGroup;

  reserveInfoGroup: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        MyValidators.cannotContainSpace,
      ]),
      lastName: new FormControl(),
    }),
    gender: new FormControl(),
    city: new FormControl(),
    hobbies: new FormArray([]),
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

  // get contract FormArray
  get firstName() {
    return this.reserveInfoGroup.get(['name', 'firstName'])!;
  }

  // get contract FormArray
  get lastName() {
    return this.reserveInfoGroup.get(['name', 'lastName'])!;
  }

  // customerise validators
  static cannotContainSpace(control: AbstractControl) {
    if (/\s/.test(control.value)) return { cannotContainSpace: true };
    return null;
  }

  // setValue pathcValue valueChnage
  valueInfo: FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
  });

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
    return this.hobbies.map(() => new FormControl(false));
  }

  /**
   * 动态添加，删除checkbox中的FormControl
   * @param e $event
   */
  onCheckboxChange(e: any) {
    const value = e.target.value;
    if (e.target.checked) {
      this.hobby.push(new FormControl(value));
    } else {
      // find index
      const index = this.hobby.controls.findIndex((e) => e.value === value);
      this.hobby.removeAt(index);
    }
    console.log('hobby', this.hobby);
  }

  setValue() {
    this.valueInfo.setValue({
      firstName: 'ss',
      lastName: 'dd',
    });
  }

  patchValue() {
    this.valueInfo.patchValue({
      firstName: 'aaa',
    });
  }

  /**
   * valueChange
   * value: value
   */
  valueChange() {
    this.valueInfo.get('firstName')?.valueChanges.subscribe((value) => {
      console.log('fitstName', value);
    });
    this.valueInfo.get('lastName')?.valueChanges.subscribe((value) => {
      console.log('lastName', value);
    });
  }

  /**
   * reset FormGroup
   */
  resetFormGroup() {
    this.valueInfo.reset();
  }

  runReserveTest() {
    console.log('this is runReserveTest in reserveForm-Component');
  }

  showSide() {
    this.side.nativeElement.style.transform = "translate(0, 0)"
  }

  hideSide() {
    this.side.nativeElement.style.transform = "translate(100%, 0)"
  }

}
