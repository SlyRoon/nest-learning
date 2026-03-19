import { runTask3SingletonDemo } from './lab_02/task3-singleton/task3-singleton.demo';
import { runTask4PrototypeDemo } from './lab_02/task4-prototype/task4-prototype.demo';
import { runTask5BuilderDemo } from './lab_02/task5-builder/task5-builder.demo';

function runPatternsDemo(): void {
  console.log('=== Design Patterns Demo ===');
  runTask3SingletonDemo();
  runTask4PrototypeDemo();
  runTask5BuilderDemo();
}

runPatternsDemo();
