import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  conditionExpression = 1;
  colorFlg: boolean = true;
  attr: string = 'pink';
  // get dom
  @ViewChild('title') title: any;
  // get child component
  @ViewChild('receiveForm') receiveForm: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  /**
   * 视图加载完成以后触发的方法 dom加载完成 (建议把dom操作放在这里)
   */
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('title', this.title);
    this.title.nativeElement.style.fontSize = '70px';

    // run child Component function
    this.receiveForm.runReserveTest();
  }

  runChildFuc(e: any) {
    console.log('e', e);
  }

}
