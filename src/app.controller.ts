import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("roshan")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getalldetails')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('createdetail')
  createHello(): string{
    return "Hello Create for the first time"
  }
}
