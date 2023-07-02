import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
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

  // rxjs多次执行 (promise只能执行一次) example

  getPromiseSetIntervalData() {
    ///example

    // const myPromise = new Promise((resolve, reject) => {
    //   // 调用API
    //   fetch('https://api.example.com/data')
    //     .then(response => {
    //       // 处理响应数据
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         throw new Error('API请求失败');
    //       }
    //     })
    //     .then(data => {
    //       // 成功时调用resolve()，传递数据
    //       resolve(data);
    //     })
    //     .catch(error => {
    //       // 失败时调用reject()，传递错误信息
    //       reject(error);
    //     });
    // });

    // 调用函数
    //   myPromise
    // .then(data => {
    //   // 处理成功的结果数据
    //   console.log(data);
    // })
    // .catch(error => {
    //   // 处理错误信息
    //   console.log(error);
    // });

    return new Promise((resolve, reject) => {
      let num: number = 0;
      setInterval(() => {
        num++;
        resolve(num);
      }, 1000);
    });
  }

  getRxjsSetIntervalData() {
    /// example

    // const myObservable = new Observable(observer => {
    //   // 调用API
    //   fetch('https://api.example.com/data')
    //     .then(response => {
    //       // 处理响应数据
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         throw new Error('API请求失败');
    //       }
    //     })
    //     .then(data => {
    //       // 发出数据
    //       observer.next(data);
    //       // 完成Observable
    //       observer.complete();
    //     })
    //     .catch(error => {
    //       // 发生错误
    //       observer.error(error);
    //     });
    // });

    return new Observable((observable) => {
      let num: number = 0;
      let id: any = '';
      id = setInterval(() => {
        num++;
        observable.next(num);
        observable.next(num + 10086);
        if (num > 2) clearInterval(id);
      }, 1000);
    });
  }
}
