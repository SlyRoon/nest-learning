import { Module } from '@nestjs/common';

import { AbstractFactoryDemoController } from './abstarct-demo.module';
import { AbstractFactoryDemoService } from './demo/abstract-factory-demo.service';

import { TechFactoryRegistry } from './registry/tech-factory.registry';

import { BalaxyFactory } from './factories/balaxy.factory';
import { IproneFactory } from './factories/iprone.factory';
import { KiaomiFactory } from './factories/kiaomi.factory';

@Module({
  controllers: [AbstractFactoryDemoController],
  providers: [
    AbstractFactoryDemoService,
    TechFactoryRegistry,
    BalaxyFactory,
    IproneFactory,
    KiaomiFactory,
  ],
})
export class Task2AbstractFactoryModule {}
