import { Controller, Get } from '@nestjs/common';
import { AbstractFactoryDemoService } from './demo/abstract-factory-demo.service';

@Controller('abstract-factory')
export class AbstractFactoryDemoController {
  constructor(private readonly demo: AbstractFactoryDemoService) {}

  @Get('demo')
  run() {
    return this.demo.run();
  }
}
