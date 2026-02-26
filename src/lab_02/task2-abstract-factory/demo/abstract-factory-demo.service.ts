import { Injectable, OnModuleInit } from '@nestjs/common';
import { Brand } from '../contracts/brand.enum';
import { TechFactoryRegistry } from '../registry/tech-factory.registry';

@Injectable()
export class AbstractFactoryDemoService implements OnModuleInit {
  constructor(private readonly registry: TechFactoryRegistry) {}
  onModuleInit() {
    this.run();
  }
  run() {
    const factory = this.registry.getFactory(Brand.Balaxy);
    const laptop = factory.createLaptop().getInfo();
    const ebook = factory.createEbook().getInfo();
    const netbook = factory.createNetBook().getInfo();
    const smartphone = factory.createSmartPhone().getInfo();

    console.log('Laptop:', laptop);
    console.log('Ebook:', ebook);
    console.log('Netbook:', netbook);
    console.log('Smartphone:', smartphone);
    return { laptop, ebook, netbook, smartphone };
  }
}
