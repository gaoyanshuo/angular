import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  axiosGet(api: string): Promise<any> {
    // promise处理异步
    return new Promise((resolve, reject) => {
      axios
        .get(api)
        .then((res) => {
          resolve(res);
        })
        .catch(() => {});
    });

    // rxjs处理异步
    // return new Observable((observable) => {
    //   axios
    //     .get(api)
    //     .then((res) => {
    //       observable.next(res);
    //     })
    //     .catch(() => {});
    // });
  }
}
