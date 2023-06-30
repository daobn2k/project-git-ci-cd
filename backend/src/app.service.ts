import { Injectable } from '@nestjs/common';
var os = require('os');
var hostname = os.hostname();
@Injectable()
export class AppService {
  async getHello() {
    return 'hello';
  }
}
