import { Injectable } from '@nestjs/common';
var os = require('os');
var hostname = os.hostname();
@Injectable()
export class AppService {
  async getHello() {
    const url = 'http://private-vvdao.ddns.net/';
    const res = await fetch(url).then((res) => res.json());

    return {
      data:
        `Public Server connect to Private server ${url} and return ` + res.data,
    };
  }
}
