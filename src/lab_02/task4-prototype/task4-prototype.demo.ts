import { Virus } from './virus';

export function runTask4PrototypeDemo(): void {
  console.log('\n=== Task 4: Prototype / Virus Family ===');

  const grandChildA1 = new Virus('A1-Micro', 'RNA', 1, 0.08);
  const grandChildA2 = new Virus('A2-Micro', 'RNA', 1, 0.09);
  const grandChildB1 = new Virus('B1-Micro', 'DNA', 2, 0.11);

  const childA = new Virus('Alpha-Child', 'RNA', 3, 0.24, [
    grandChildA1,
    grandChildA2,
  ]);
  const childB = new Virus('Beta-Child', 'DNA', 4, 0.31, [grandChildB1]);

  const ancestor = new Virus('Ancestor-Zero', 'Hybrid', 12, 1.12, [childA, childB]);

  console.log('Original family snapshot:');
  console.log(JSON.stringify(ancestor.toSnapshot(), null, 2));

  const clonedParent = childA.clone();

  console.log('Cloned parent snapshot:');
  console.log(JSON.stringify(clonedParent.toSnapshot(), null, 2));

  console.log('Reference checks:');
  console.log('childA === clonedParent:', childA === clonedParent);
  console.log(
    'childA.children[0] === clonedParent.children[0]:',
    childA.children[0] === clonedParent.children[0],
  );
  console.log(
    'childA.children[1] === clonedParent.children[1]:',
    childA.children[1] === clonedParent.children[1],
  );

  clonedParent.name = 'Alpha-Child-Clone';
  clonedParent.children[0].name = 'A1-Micro-Clone';

  console.log('After changing the clone:');
  console.log('Original childA name:', childA.name);
  console.log('Cloned parent name:', clonedParent.name);
  console.log('Original grandchild name:', childA.children[0].name);
  console.log('Cloned grandchild name:', clonedParent.children[0].name);
}
