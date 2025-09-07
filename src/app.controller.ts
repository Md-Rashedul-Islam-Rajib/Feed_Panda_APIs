import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request) {
    const response = this.appService.getHello();

    // Get client IP
    const clientIp =
      (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress;

    // Inject client IP dynamically
    response.clientDetails.ipAddress = clientIp ?? '';

    return response;
  }
}
