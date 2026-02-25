import { Controller, Get } from '@nestjs/common';
import { FactoryDemoService } from './demo/factory-demo.service';

@Controller('factory')
export class FactoryDemoController {
  constructor(private readonly demo: FactoryDemoService) {}

  @Get('demo')
  run() {
    return this.demo.run();
  }
}
