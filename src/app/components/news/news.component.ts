import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  /*

  声明属性的几种方式：
        
      public      共有  *（默认）  可以在这个类里面使用、也可以在类外面使用

      protected   保护类型        他只有在当前类和它的子类里面可以访问

      private     私有                  只有在当前类才可以访问这个属性
  
  
  */
  public title: string = 'I am title!';

  public content="<h2>我是一个html标签</h2>";
}
