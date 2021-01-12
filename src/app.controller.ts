import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get()
  // sendApplication(@Res() res) {
  //   res.sendFile(path.join(__dirname, '../../eizenhot-pressure-frontend/dist/eizenhot-pressure-frontend/index.html'));
  // }
}
