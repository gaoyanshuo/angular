//引入核心模块里面的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //使用这个组件的名称
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularITY'; //定义属性
}
