import { Component, ViewChild } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { filter, map } from 'rxjs/operators';
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

  constructor(reqService: RequestService) {
    console.log('getData', reqService.getData());  // 同步

    reqService.getCallbackData((data: any) => console.log('getCallbackData', data)); // callback获取异步数据

    reqService.getPromiseData().then((res) => console.log('getPromiseData', res)); // promise获取异步数据
    const stream = reqService.getRxjsData().subscribe((res) => console.log('getRxjsData', res)) //rxjs获取异步数据
    setTimeout(() => {
      stream.unsubscribe() //rxjs取消订阅（取消异步方法的执行）(取消订阅需要用subscribe的返回值来取消)
    }, 2001);

    // promise多次执行(没有这个能力)
    reqService.getPromiseSetIntervalData().then((res) => console.log('getPromiseSetIntervalData', res));
    // Rxjs多次执行
    reqService.getRxjsSetIntervalData().subscribe((res) => console.log('getRxjsSetIntervalData', res));

    // Rxjs 工具方法 (pipe, map, filter)
    reqService.getRxjsSetIntervalData()
      .pipe(
        filter((value: any) => value % 2 === 0 ? true : false)
      ).pipe(
        map((value: number) => value * 2)
      ).subscribe((res) => console.log('getRxjsSetIntervalData--filter', res));
  }

  

  ngOnInit(): void {}

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
