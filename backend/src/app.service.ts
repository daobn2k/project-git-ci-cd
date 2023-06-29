import { Injectable } from '@nestjs/common';
var os = require('os');
var hostname = os.hostname();
@Injectable()
export class AppService {
  getHello(): string {
    return (
      'Chào mừng bạn đã đến với Demo cụa Văn đạo :))))))) - Private IP' +
      hostname
    );
  }
}
