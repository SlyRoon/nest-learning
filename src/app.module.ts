import { Module } from '@nestjs/common';
import { Task1FactoryModule } from './lab_02/task1-factory/task1-factory.module';
import { Task2AbstractFactoryModule } from './lab_02/task2-abstract-factory/task2-abstarct-factory.module';

@Module({
  imports: [Task1FactoryModule, Task2AbstractFactoryModule],
})
export class AppModule {}
