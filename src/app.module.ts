import { Module } from '@nestjs/common';
import { Task1FactoryModule } from './lab_02/task1-factory/task1-factory.module';

@Module({
  imports: [Task1FactoryModule],
})
export class AppModule {}
