import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor() {}

  /**
   * 同步
   * @returns
   */
  getData() {
    return 'this is request service data';
  }

  /**
   * 异步 回调函数
   */
  getCallbackData(cal: any) {
    setTimeout(() => {
      const data = 'setTimeout data';
      cal(data);
    }, 1000);
  }

  getPromiseData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'promise data';
        resolve(data);
      }, 1000);
    });
  }

  getRxjsData() {
    return new Observable((observable) => {
      setTimeout(() => {
        const data = 'rxjs data';
        observable.next(data);
        // observable.error('error');
      }, 2000);
    });
  }
}
