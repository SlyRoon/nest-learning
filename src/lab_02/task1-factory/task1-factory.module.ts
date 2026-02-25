import { Module } from '@nestjs/common';
import { FactoryDemoService } from './demo/factory-demo.service';
import { FactoryDemoController } from './factory-demo.controller';

@Module({
  controllers: [FactoryDemoController],
  providers: [FactoryDemoService],
})
export class Task1FactoryModule {}
