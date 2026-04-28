import { AbstractFactoryDemoService } from './lab_02/task2-abstract-factory/demo/abstract-factory-demo.service';
import { BalaxyFactory } from './lab_02/task2-abstract-factory/factories/balaxy.factory';
import { IproneFactory } from './lab_02/task2-abstract-factory/factories/iprone.factory';
import { KiaomiFactory } from './lab_02/task2-abstract-factory/factories/kiaomi.factory';
import { TechFactoryRegistry } from './lab_02/task2-abstract-factory/registry/tech-factory.registry';
import { FactoryDemoService } from './lab_02/task1-factory/demo/factory-demo.service';
import { runTask3SingletonDemo } from './lab_02/task3-singleton/task3-singleton.demo';
import { runTask4PrototypeDemo } from './lab_02/task4-prototype/task4-prototype.demo';
import { runTask5BuilderDemo } from './lab_02/task5-builder/task5-builder.demo';

function runPatternsDemo(): void {
  console.log('=== Design Patterns Demo ===');

  const task1Demo = new FactoryDemoService();
  task1Demo.run();

  const task2Registry = new TechFactoryRegistry(
    new BalaxyFactory(),
    new IproneFactory(),
    new KiaomiFactory(),
  );
  const task2Demo = new AbstractFactoryDemoService(task2Registry);
  task2Demo.run();

  runTask3SingletonDemo();
  runTask4PrototypeDemo();
  runTask5BuilderDemo();
}

runPatternsDemo();
