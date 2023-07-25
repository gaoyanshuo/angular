/*这个文件是Angular 根模块，告诉Angular如何组装应用*/

//Angular核心模块
import { NgModule } from '@angular/core';
//BrowserModule，浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// 与服务器交互 (angular内置，用rxjs封装的，用subscribe调用)
import { HttpClientModule } from '@angular/common/http';
// jsonP 跨域的一种解决方案
import { HttpClientJsonpModule } from '@angular/common/http';
import axios from 'axios';
//根组件
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ReserveFormComponent } from './components/reserve-form/reserve-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';//for ngModel
import { RequestService } from './services/request.service';
import { HttpService } from './services/http.service';
/*@NgModule装饰器, @NgModule接受一个元数据对象，告诉 Angular 如何编译和启动应用*/
@NgModule({
  declarations: [ /*配置当前项目运行的的组件*/
    AppComponent, NewsComponent, HomeComponent, HeaderComponent, ReserveFormComponent
  ],
  imports: [ /*配置当前模块运行依赖的其他模块*/
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [RequestService, HttpService,{ provide: 'Axios', useValue: axios } ],/*配置项目所需要的服务*/
  bootstrap: [AppComponent]  /* 指定应用的主视图（称为根组件） 通过引导根AppModule来启动应用  ，这里一般写的是根组件*/
})

//根模块不需要导出任何东西，   因为其它组件不需要导入根模块
export class AppModule { }
